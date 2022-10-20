const categoryResolver = {
  Query: {
    getCategory: (_, { categoryId }, { dataSources }) => {
      return dataSources.categoryAPI.getCategory(categoryId);
    },
    getCategories: (_, __, { dataSources }) => {
      return dataSources.categoryAPI.getCategories();
    },
  },
  Mutation: {
    createCategory: (_, { categoryInput }, { dataSources, user }) => {
      const category = {
        category: categoryInput.category,
        svg: categoryInput.svg,
      };
      return dataSources.categoryAPI.createCategory(category, user.accessToken);
    },
    updateCategory: (
      _,
      { categoryId, categoryInput },
      { dataSources, user }
    ) => {
      const category = {
        category: categoryInput.category || null,
        svg: categoryInput.svg || null,
      };
      return dataSources.categoryAPI.updateCategory(
        categoryId,
        category,
        user.accessToken
      );
    },
    deleteCategory: (_, { categoryId }, { dataSources, user }) => {
      return dataSources.categoryAPI.deleteCategory(
        categoryId,
        user.accessToken
      );
    },
  },
};
module.exports = categoryResolver;
