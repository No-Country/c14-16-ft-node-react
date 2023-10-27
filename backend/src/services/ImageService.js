import { mkdirSync, writeFileSync, existsSync, readFileSync, unlinkSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const saveImage = async(image, name) => {
    

    const branchPath = join(__dirname, '../../images/profiles');

    const uniqueFileName = `${name}_${Date.now()}.png`;
    const filePath = join(branchPath, uniqueFileName);

    const data = Buffer.from(image, 'base64');
    writeFileSync(filePath, data);

    return filePath
}

export const saveImageDefault = () => {
    const defaultImages = ['1.jpeg', '2.jpeg','3.jpeg','4.jpeg']
    const random = Math.floor(Math.random() * (3 - 0 + 1) + 0)
    const filePath = join(__dirname,'../../images/profiles/default', defaultImages[random])
    return filePath
}

export const saveImages  = async(images, company_id, name, res) => {
    try{
        const routes = []

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const branchPath = join(__dirname, '../../images', company_id.toString(), name);

        if (!existsSync(branchPath)) {
            mkdirSync(branchPath, { recursive: true });
        }
        

        images.forEach(image => {
            const imageArray = image.name.split(".")

            if (!['jpg', 'jpeg', 'png'].includes(imageArray[1])) {
                return res.status( 400 ).send('La imagen no tiene una extensión válida (jpg, jpeg o png).');
            }

            const uniqueFileName = `${imageArray[0]}_${Date.now()}.${imageArray[1]}`;
            const filePath = join(branchPath, uniqueFileName);
        
            const data = Buffer.from(image.data, 'base64');

            writeFileSync(filePath, data);
            routes.push(filePath)
        });

        return routes
    }catch(error){
        return res.status( 500 ).json({ message: error.message });
    }
}

export const getImage = async(route) => {
    return readFileSync(route).toString("base64")
}

export const getImages = async(imagesObject)=> {
    const images = []

    imagesObject.map((image) => {
        const fileData = readFileSync(image.route);
        images.push(fileData.toString("base64"));
    })

    return images
}

export const updateImage = async(image , route, name) => {
    await deleteImage(route)
    return await saveImage(image, name)
}

export const updateImages = async(imagesObject,images, company_id, name, res) => {
    await deleteImages(imagesObject)
    return await saveImages(images, company_id, name, res)
}

export const deleteImage = async(route) => {
    if (existsSync(route)) {
        unlinkSync(route)
    }
}

export const deleteImages = async(imagesObject)=> {
    imagesObject.map((image) => {
        if (existsSync(image.route)) {
            unlinkSync(image.route)
        }
    })
}