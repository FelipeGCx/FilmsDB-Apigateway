const { gql } = require("apollo-server");
const sagaTypeDefs = gql`
  input SagaInput {
    saga: String!
    svg: String!
  }
  type Data {
    id: Int!
    saga: String!
    svg: String!
  }
  type SagaDetail {
    data: Data
    error: Boolean
  }
  type StringResponse {
	message: String
	error: Boolean
  }
  type Mutation {
    createSaga(sagaInput: SagaInput): SagaDetail!
    updateSaga(sagaId: Int!, sagaInput: SagaInput): SagaDetail!
    deleteSaga(sagaId: Int!): StringResponse!
  }

  type Query {
    getSaga(sagaId: Int!): SagaDetail!
    getSagas: [SagaDetail!]
  }
`;
module.exports = sagaTypeDefs;
