  
const filmResolver = require('./film_resolver');
const imageResolver = require('./image_resolver');
const sagaResolver = require('./saga_resolver');
const categoryResolver = require('./category_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(filmResolver,imageResolver,sagaResolver,categoryResolver);
module.exports = resolvers;