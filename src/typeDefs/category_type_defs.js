const { gql } = require('apollo-server');
const categoryTypeDefs = gql`
	input CategoryInput {
		category: String!
		svg: String!
	}
	type CategoryData {
		id: Int!
		category: String!
		svg: String!
	}
	type CategoryDetail {
		data:CategoryData
		error:Boolean
	}
	type CategoriesDetail {
		data:[CategoryData]
		error:Boolean
	}
	type StringResponse {
	message: String
	error: Boolean
  	}
	type Mutation {
		createCategory(categoryInput: CategoryInput): CategoryDetail!
		updateCategory(categoryId: Int!, categoryInput: CategoryInput): CategoryDetail!
		deleteCategory(categoryId: Int!): StringResponse!
	}

	type Query {
		getCategory(categoryId: Int!): CategoryDetail!
		getCategories: CategoriesDetail!
	}
`;
module.exports = categoryTypeDefs;
