import { Image } from "../models/Image.js";

export const createImages = async(images, createdBranch) => {
    const createdImages = await Image.bulkCreate(images.map(image => ({ branch_id: createdBranch.id, route: image })));
    const imageRoutes = createdImages.map(image => image.route);
    createdBranch.images = imageRoutes;

    createdBranch = {
        ...createdBranch.get({ plain: true }),
        images: imageRoutes,
      };

    return createdBranch
}