const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class ImageAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = serverConfig.resize_api_url;
    }
    async resizeImage(data) {
        return await this.post(`/resize`,data);
    }
}
module.exports = ImageAPI;
