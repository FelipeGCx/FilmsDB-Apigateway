const userResolver = {
  Mutation: {
    loginUser: (_, { userInput }, { dataSources }) => {
      const user = {
        username: userInput.username,
        password: userInput.password,
      };
      return dataSources.userAPI.loginUser(user);
    },
    signupUser: (_, { userInput }, { dataSources }) => {
      return dataSources.userAPI.signupUser(userInput);
    },
    verifyToken: (_, { token }, { dataSources }) => {
      let tokenAccess = {
        token: token
      }
      return dataSources.userAPI.verifyToken(tokenAccess);
    },
  },
};
module.exports = userResolver;
