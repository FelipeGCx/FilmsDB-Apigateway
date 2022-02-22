const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
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
    async createSaga(saga) {
        return await this.post(`/create/saga`, saga);
    }
    async updateSaga(sagaId,saga) {
        return await this.put(`/update/saga/${sagaId}`, saga);
    }
    async deleteSaga(sagaId) { 
        return await this.delete(`/delete/saga/${sagaId}`);
    }
}
module.exports = SagaAPI;
