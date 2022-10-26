const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");
class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.films_api_url;
  }
  async loginUser(user) {
    return await this.post("/auth/login", user);
  }
  async signupUser(user) {
    return await this.post("/auth/signup", user);
  }
  async verifyToken(token) {
    return await this.post("/auth/verifytoken", token);
  }
}
module.exports = UserAPI;
