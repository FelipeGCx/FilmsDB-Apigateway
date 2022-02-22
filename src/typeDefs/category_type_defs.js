const { gql } = require('apollo-server');
const categoryTypeDefs = gql`
	type CategoryDetail {
		id: Int!
		category: String!
		svg: String!
	}

	input CategoryInput {
		category: String!
		svg: String!
	}

	type Mutation {
		createCategory(categoryInput: CategoryInput): CategoryDetail!
		updateCategory(categoryId: Int!, categoryInput: CategoryInput): CategoryDetail!
		deleteCategory(categoryId: Int!): String!
	}

	type Query {
		getCategory(categoryId: Int!): CategoryDetail!
		getCategories: [CategoryDetail!]
	}
`;
module.exports = categoryTypeDefs;
