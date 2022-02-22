const sagaResolver = {
	Query: {
		getSaga: (_, { sagaId }, { dataSources }) => {
			return dataSources.sagaAPI.getSaga(sagaId);
		},
		getSagas: (_, __, { dataSources }) => {
			return dataSources.sagaAPI.getSagas();
		}
	},
	Mutation: {
		createSaga: (_, { sagaInput }, { dataSources }) => {
			const saga = {
				saga: sagaInput.saga
			};
			return dataSources.sagaAPI.createSaga(saga);
		},
        updateSaga: (_, { sagaId,sagaInput }, { dataSources }) => {
            const saga = {
				saga: sagaInput.saga || null,
				svg: sagaInput.svg || null
			};
			return dataSources.sagaAPI.updateSaga(sagaId,saga);
		},
		deleteSaga: (_, { sagaId }, { dataSources }) => {
			return dataSources.sagaAPI.deleteSaga(sagaId);
		},
	}
};
module.exports = sagaResolver;
