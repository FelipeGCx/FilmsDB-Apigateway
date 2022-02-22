const categoryResolver = {
	Query: {
		getCategory: (_, { categoryId }, { dataSources }) => {
			return dataSources.categoryAPI.getCategory(categoryId);
		},
		getCategories: (_, __, { dataSources }) => {
			return dataSources.categoryAPI.getCategories();
		}
	},
	Mutation: {
		createCategory: (_, { categoryInput }, { dataSources }) => {
			const category = {
				category: categoryInput.category
			};
			return dataSources.categoryAPI.createCategory(category);
		},
        updateCategory: (_, { categoryId, categoryInput }, { dataSources }) => {
            const category = {
				category: categoryInput.category || null,
				svg: categoryInput.svg || null
			};
			return dataSources.categoryAPI.updateCategory(categoryId, category);
		},
		deleteCategory: (_, { categoryId }, { dataSources }) => {
			return dataSources.categoryAPI.deleteCategory(categoryId);
		},
	}
};
module.exports = categoryResolver;
