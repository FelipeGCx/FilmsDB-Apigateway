const { gql } = require('apollo-server');
const imageTypeDefs = gql`
	input imageInput {
		name: String!
		size_x: Int!
		size_y: Int!
		type_format: String!
		base64: String!
	}

	type imageDetail {
		base64: String
	}
	
	type Mutation {
		resizeImage(imageInput: imageInput!): String!
	}
`;
module.exports = imageTypeDefs;
	