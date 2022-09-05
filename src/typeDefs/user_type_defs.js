const { gql } = require("apollo-server");
const userTypeDefs = gql`
  inpu UserInput {
    username: String!
    password: String!
  }
  inpu SingUpInput {
    username: String!
    email: String!
    password: String!
  }
  type Data {
    id: String
    username: String
    email: String
    roles: [String]
    accessToken: String
    tokenType: String
  }
  type UserDetail{
    data: Data
    error: Boolean
  }

  type Mutation {
    loginUser(userInput: UserInput!): UserDetail!
    signupUser(userInput: SingUpInput!): UserDetail!
  }
`;
module.exports = userTypeDefs;
