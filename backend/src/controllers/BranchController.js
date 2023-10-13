import { Branch } from "../models/Branch.js"
import { Company } from "../models/Company.js";
import { Image } from "../models/Image.js";
import { Rate } from "../models/Rate.js";
import { ServiceBranch } from "../models/ServiceBranch.js";
import { BranchAnimalTypes } from "../models/BranchAnimalType.js"
import { Service } from "../models/Service.js";
import { AnimalTypes } from "../models/AnimalTypes.js";

export const getBranches = async ( req, res ) => {
    try {
        const branches = await Branch.findAll({
            include: [
                {
                  model: Image,
                  as: 'images',
                },
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
                      model: Image,
                      as: 'images',
                    },
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

        const branchesByCompany = await Branch.findAll({where: {company_id: id},
            include: [
                    {
                      model: Image,
                      as: 'images',
                    },
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
        const { name, description, city, capacity, amount, phone, address, company_id, images, rates, services, animalTypes } = req.body


        if(!name || !description || !city || !capacity || !phone || !address || !company_id || !rates || !services || !animalTypes){
            return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
        }

        const company = await Company.findByPk( company_id );

        if (!company) {
            return res.status(404).json({ message: 'Empresa no encontrada' });
        }

        const branchExist = await Branch.findOne({ where: { name, address, company_id } });

        if(branchExist) {
            return res.status( 400 ).json({ message: "La sucursal ya existe"})
        }

        const { sequelize } = Branch;
        const createdBranch = await sequelize.transaction(async (transaction) => {
            const createdBranch = await Branch.create(
                { 
                    name, description, city, capacity, amount, phone, address, company_id: company.id,
                    images: images.map((image) => ({ route: image.route })),
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

        branchToUpdate.set( req.body );
        branchToUpdate.save();
        return res.status( 200 ).json({ result: branchToUpdate });
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message });
    }
}

export const deleteBranch = async ( req, res ) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
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