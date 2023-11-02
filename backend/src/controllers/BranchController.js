import { Branch } from "../models/Branch.js"
import { Company } from "../models/Company.js";
import { Image } from "../models/Image.js";
import { Rate } from "../models/Rate.js";
import { ServiceBranch } from "../models/ServiceBranch.js";
import { BranchAnimalTypes } from "../models/BranchAnimalType.js"
import { Service } from "../models/Service.js";
import { AnimalTypes } from "../models/AnimalTypes.js";
import { saveImages, getImages, deleteImages, updateImages, getImage } from "../services/ImageService.js";

export const getBranches = async ( req, res ) => {
    try {
        const branches = await Branch.findAll({
            include: [
                {
                  model: Rate,
                  as: 'rates',
                },
                {
                  model: Service,
                  as: 'services',
                },
                {
                  model: AnimalTypes,
                  as: 'animalTypes',
                },
                {
                    model: Image,
                    as: 'images',
                    limit: 1, 
                },
              ]
        });


        for (const branch of branches) {
            if (branch.images && branch.images.length > 0) {
                const image = branch.images[0];
                const imageData = await getImage(image.route);
                branch.setDataValue('images', imageData);
            }
        }
        
        return res.status( 200 ).json({ result: branches }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message }); 
    }
}

export const getBranch = async (req, res ) => {
    try {
        const { id } = req.params;
        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }

        const getBranch = await Branch.findByPk( id,
            {
                include: [
                    {
                      model: Rate,
                      as: 'rates',
                    },
                    {
                      model: Service,
                      as: 'services',
                    },
                    {
                      model: AnimalTypes,
                      as: 'animalTypes',
                    },
                ]
            }
            );

        if(!getBranch){
            return res.status( 404 ).json({ message: "La sucursal no existe" }); 
        }

        const imagesObject = await Image.findAll({where: {branch_id: id}})

        if(getImages){
            const images = await getImages(imagesObject)
            getBranch.setDataValue("images", images)
        }

        return res.status( 200 ).json({ result: getBranch }); 
    } catch (error) {
        return res.status( 500 ).json({ message: error.message }); 
    }
}

export const getBranchesByCompany = async(req, res) => {
    try {
        const { id } = req.params

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }
        const company = await Company.findByPk( id )

        if(!company){
            return res.status(404).json({message: "La empresa no existe"})
        }

        const branchesByCompany = await Branch.findAll({where: {company_id: id},
            include: [
                    {
                      model: Rate,
                      as: 'rates',
                    },
                    {
                      model: Service,
                      as: 'services',
                    },
                    {
                      model: AnimalTypes,
                      as: 'animalTypes',
                    },
                ]
        });

        return res.status( 200 ).json({ result: branchesByCompany }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message }); 
    }
}

export const createBranch = async(req, res) => {
    try {
        const { name, description, city, capacity, amount, price_km,phone, address, company_id, rates, services, animalTypes,long,lat, images } = req.body  
        let routes = []

        if(images){
            routes = await saveImages(images, company_id, name, res)
        }
        if(!name || !description || !city || !capacity || !phone || !address || !company_id || !rates || !services || !animalTypes || !price_km || !long || !lat){
            return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
        }

        const company = await Company.findByPk( company_id );

        if (!company) {
            return res.status(404).json({ message: 'Empresa no encontrada' });
        }

        const branchExist = await Branch.findOne({ where: { name, address, city , company_id } });

        if(branchExist) {
            return res.status( 400 ).json({ message: "La sucursal ya existe"})
        }

        
        const { sequelize } = Branch;
        const createdBranch = await sequelize.transaction(async (transaction) => {
            const createdBranch = await Branch.create(
                { 
                    name, description, city, capacity, amount, price_km, phone, address, long, lat, company_id: company.id,
                    images: routes.map((image) => ({route: image})),
                    rates: rates.map((rate) => ({ weightFrom: rate.weightFrom, weightTo: rate.weightTo, price: rate.price }))
                },
                {
                    include: [
                        {
                            model: Image,
                            as: 'images'
                        },
                        {
                            model: Rate,
                            as: 'rates'
                        },
                    ],
                    transaction,
                });

            if(createdBranch){
                const serviceBranchData = services.map((service) => ({
                    branch_id: createdBranch.id,
                    service_id: service.id,
                }));
                const createdServices = await ServiceBranch.bulkCreate(serviceBranchData, { transaction });

                createdBranch.setDataValue('services', createdServices)

                const animalTypesData = animalTypes.map((type) => ({
                    branch_id: createdBranch.id,
                    animal_type_id: type.id,
                }))
                const createdTypes = await BranchAnimalTypes.bulkCreate(animalTypesData, {transaction})

                createdBranch.setDataValue('animalTypes' , createdTypes)

            }

            return createdBranch
        })

        return res.status( 201 ).json({ result: createdBranch });
    } catch (error) {
        console.log(error)
        return res.status( 500 ).json({ message: error.message }); 
    }
}

export const updateBranch = async ( req, res ) =>{
    try {
        const { id } = req.params;
        

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }

        const branchToUpdate = await Branch.findByPk( id );

        if(!branchToUpdate){
            return res.status( 404 ).json({ message: 'La sucursal no existe' });
        }

        const updatedData = { ...req.body }
        if(updatedData.services){

            const newServicesIds = await updateBranchServices(updatedData.services)

            if( newServicesIds.length > 0){
                await branchToUpdate.setServices([])
                await branchToUpdate.addServices(newServicesIds);
            }

            delete updatedData.services
        }

        if(updatedData.rates){
            await updateBranchRates( branchToUpdate.id, updatedData.rates)
        }

        if(updatedData.animalTypes){
            const newTypesIds = await updateBranchAnimalType(updatedData.animalTypes)

            if(newTypesIds.length > 0) {
                await branchToUpdate.setAnimalTypes([])
                await branchToUpdate.addAnimalTypes(newTypesIds)
            }

            delete updatedData.animalTypes
        }
        if(updatedData.images){
            const imagesToUpdate = await Image.findAll({where: {branch_id: id}})
            await updateBranchImage(imagesToUpdate, updatedData.images, branchToUpdate.company_id, branchToUpdate.name, res, branchToUpdate.id)
            delete updatedData.images
        }

        branchToUpdate.set(updatedData)
        const newBranch = await branchToUpdate.save({returning: true,});

        return res.status( 200 ).json({ result: newBranch });
    } catch ( error ) {
        console.log(error)
        return res.status( 500 ).json({ message: error.message });
    }
}

export const deleteBranch = async ( req, res ) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }

        const branchExist = await Branch.findByPk( id )

        if( !branchExist ) {
            return res.status( 404 ).json({ message: "La sucursal no existe" }); 
        }

        const getImages = await Image.findAll({where: { branch_id: id }})

        if(getImages){
            await deleteImages(getImages)
        }
        await Branch.destroy({
            where: {
                id
            }
        });
        
        return res.status( 200 ).json({ result: `Sucursal ${id} eliminada correctamente` })
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message });
    }
}


export const insertImages = async(req, res) => {
    try{
        const { images, branch_id } = req.body

        if(!branch_id || !images || images.length === 0){
            return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
        }

        const branch = await Branch.findByPk( branch_id )

        if(!branch){
            return res.status( 404 ).json({ message: "La sucursal no existe" });
        }

        const routes = await saveImages(images, branch.company_id, branch.name, res)


        await Image.bulkCreate(routes.map(route => ({route: route , branch_id: branch.id})))

        return res.status( 200 ).json({ result: `Imagenes generadas correctamente`})
    }catch(error){
        return res.status( 500 ).json({ message: error.message });
    }
}

const updateBranchServices = async(services) => {
    return services.map(service => service.id)

}

const updateBranchRates = async(branch_id, rates) => {
    await Rate.destroy({where: {branch_id: branch_id}})
    await Rate.bulkCreate(rates.map((rate) => ({ weightFrom: rate.weightFrom, weightTo: rate.weightTo, price: rate.price, branch_id: branch_id })))
}

const updateBranchAnimalType = async(animalTypes) => {
    return animalTypes.map(animalType => animalType.id)
}

const updateBranchImage = async(imagesToUpdate, images, company_id, name, res, id)=>{
    await Image.destroy({
        where: { branch_id: id },
    });
    const routes = await updateImages(imagesToUpdate,images 
        , company_id, name, res)

    await Image.bulkCreate(routes.map(route => ({route: route , branch_id: id})))
}