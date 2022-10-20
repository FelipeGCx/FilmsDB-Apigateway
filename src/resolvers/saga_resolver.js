const sagaResolver = {
  Query: {
    getSaga: (_, { sagaId }, { dataSources }) => {
      return dataSources.sagaAPI.getSaga(sagaId);
    },
    getSagas: (_, __, { dataSources }) => {
      return dataSources.sagaAPI.getSagas();
    },
  },
  Mutation: {
    createSaga: (_, { sagaInput }, { dataSources, user }) => {
      const saga = {
        saga: sagaInput.saga,
        svg: sagaInput.svg,
      };
      return dataSources.sagaAPI.createSaga(saga, user.accessToken);
    },
    updateSaga: (_, { sagaId, sagaInput }, { dataSources, user }) => {
      const saga = {
        saga: sagaInput.saga || null,
        svg: sagaInput.svg || null,
      };
      return dataSources.sagaAPI.updateSaga(sagaId, saga, user.accessToken);
    },
    deleteSaga: (_, { sagaId }, { dataSources, user }) => {
      return dataSources.sagaAPI.deleteSaga(sagaId, user.accessToken);
    },
  },
};
module.exports = sagaResolver;
