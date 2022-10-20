const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");
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
  async createCategory(category, tokenAccess) {
    return await this.post(`/create/category`, category, {
      headers: { Authorization: ` Bearer ${tokenAccess}` },
    });
  }
  async updateCategory(categoryId, category, tokenAccess) {
    return await this.put(`/update/category/${categoryId}`, category, {
      headers: { Authorization: ` Bearer ${tokenAccess}` },
    });
  }
  async deleteCategory(categoryId, tokenAccess) {
    return await this.delete(`/delete/category/${categoryId}`, null ,{
      headers: { Authorization: ` Bearer ${tokenAccess}` },
    });
  }
}
module.exports = CategoryAPI;
