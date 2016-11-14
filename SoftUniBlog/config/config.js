/**
 * Created by user on 13/11/2016.
 */
const path = require('path');

module.exports = {
    development: {
        rootFolder: path.normalize(path.join(__dirname, '/../')),
        connectionString: 'mongodb://localhost:27017/blog'
    },
    production:{}
};
