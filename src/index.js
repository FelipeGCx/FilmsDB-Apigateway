const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const authentication = require('./utils/authentication');
const FilmAPI = require('./dataSources/film_api.js');
const ImageAPI = require('./dataSources/image_api.js');
const SagaAPI = require('./dataSources/saga_api.js');
const CategoryAPI = require('./dataSources/category_api.js');
const UserAPI = require('./dataSources/user_api.js');

const server = new ApolloServer({
	context: authentication,
	typeDefs,
	resolvers,
	dataSources: () => ({
		filmAPI: new FilmAPI(),
		imageAPI: new ImageAPI(),
		sagaAPI: new SagaAPI(),
		categoryAPI: new CategoryAPI(),
		userAPI: new UserAPI(),
	}),
	introspection: true,
	playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
