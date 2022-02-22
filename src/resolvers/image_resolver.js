const imageResolver = {
	Mutation: {
        resizeImage: (_, { imageInput }, { dataSources }) => {
            const img = {
                name:imageInput.name,
                size_x:imageInput.size_x,
                size_y:imageInput.size_y,
                type_format:imageInput.type_format,
                base64:imageInput.base64
            }
            return dataSources.imageAPI.resizeImage(img)
        }
	}
};
module.exports = imageResolver;
