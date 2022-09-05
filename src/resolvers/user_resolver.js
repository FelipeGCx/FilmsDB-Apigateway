const userResolver = {
  Mutation: {
    loginUser: (_, { userInput }, { dataSources }) => {
      return dataSources.userAPI.loginUser(userInput);
    },
    signupUser: (_, { userInput }, { dataSources }) => {
      return dataSources.userAPI.signupUser(userInput);
    },
  },
};
module.exports = userResolver;
