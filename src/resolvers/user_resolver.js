const userResolver = {
  Mutation: {
    loginUser: (_, { userInput }, { dataSources }) => {
      return dataSources.userAPI.loginUser();
    },
    signupUser: (_, { userInput }, { dataSources }) => {
      return dataSources.userAPI.signupUser();
    },
  },
};
module.exports = userResolver;
