const { gql } = require("apollo-server");
const userTypeDefs = gql`
  input UserInput {
    username: String!
    password: String!
  }
  input SingUpInput {
    username: String!
    email: String!
    password: String!
  }
  type UserData {
    id: String
    username: String
    email: String
    roles: [String]
    tokenType: String
    accessToken: String
  }
  type UserDetail{
    data: UserData
    error: Boolean
  }

  type Mutation {
    loginUser(userInput: UserInput): UserDetail!
    signupUser(userInput: SingUpInput): UserDetail!
    verifyToken(token:String): UserDetail!
  }
`;
module.exports = userTypeDefs;
