  
const filmTypeDefs = require('./film_type_defs');
const imageTypeDefs = require('./image_type_defs');
const sagaTypeDefs = require('./saga_type_defs');
const categoryTypeDefs = require('./category_type_defs');
const userTypeDefs = require('./user_type_defs');
const schemasArrays = [filmTypeDefs,imageTypeDefs,sagaTypeDefs,categoryTypeDefs,userTypeDefs];
module.exports = schemasArrays;
