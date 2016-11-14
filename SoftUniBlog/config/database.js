/**
 * Created by user on 13/11/2016.
 */
const mongoose = require('mongoose');

module.exports = (config) => {
    mongoose.connect(condig.connectionString);

    let database = mongoose.connection;
    database.once('open', (error) => {
        if (error) {
            console.log(error);
            return;
        }

        console.log('MongoDB ready!')
    });

    require('./../models/User');
};