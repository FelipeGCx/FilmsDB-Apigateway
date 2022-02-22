const { gql } = require('apollo-server');
const sagaTypeDefs = gql`
	type SagaDetail {
		id: Int!
		saga: String!
		svg: String!
	}

	input SagaInput {
		saga: String!
		svg: String!
	}

	type Mutation {
		createSaga(sagaInput: SagaInput): SagaDetail!
		updateSaga(sagaId: Int!, sagaInput: SagaInput): SagaDetail!
		deleteSaga(sagaId: Int!): String!
	}

	type Query {
		getSaga(sagaId: Int!): SagaDetail!
		getSagas: [SagaDetail!]
	}
`;
module.exports = sagaTypeDefs;
