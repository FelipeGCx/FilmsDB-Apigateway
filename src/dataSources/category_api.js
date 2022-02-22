const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class CategoryAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = serverConfig.films_api_url;
    }
    async getCategory(categoryId) {
        return await this.get(`/category/id=${categoryId}`);
    }
    async getCategoryName(categoryName) {
        return await this.get(`/category/name=${categoryName}`);
    }
    async getCategories() {
        return await this.get(`/categories`);
    }
    async createCategory(category) {
        return await this.post(`/create/category`, category);
    }
    async updateCategory(categoryId,category) {
        return await this.put(`/update/category/${categoryId}`, category);
    }
    async deleteCategory(categoryId) { 
        return await this.delete(`/delete/category/${categoryId}`);
    }
}
module.exports = CategoryAPI;
