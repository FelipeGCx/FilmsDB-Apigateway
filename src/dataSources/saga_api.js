const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");
class SagaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.films_api_url;
  }
  async getSaga(sagaId) {
    return await this.get(`/saga/id=${sagaId}`);
  }
  async getSagaName(sagaName) {
    return await this.get(`/saga/name=${sagaName}`);
  }
  async getSagas() {
    return await this.get(`/sagas`);
  }
  async createSaga(saga, tokenAccess) {
    return await this.post(`/create/saga`, saga, {
      headers: { Authorization: ` Bearer ${tokenAccess}` },
    });
  }
  async updateSaga(sagaId, saga, tokenAccess) {
    return await this.put(`/update/saga/${sagaId}`, saga, {
      headers: { Authorization: ` Bearer ${tokenAccess}` },
    });
  }
  async deleteSaga(sagaId, tokenAccess) {
    return await this.delete(`/delete/saga/${sagaId}`, null, {
      headers: { Authorization: ` Bearer ${tokenAccess}` },
    });
  }
}
module.exports = SagaAPI;
