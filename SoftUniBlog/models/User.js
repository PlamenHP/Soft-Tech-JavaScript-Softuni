/**
 * Created by user on 13/11/2016.
 */
const mongoose = require('mongoose');
let userSchema = mongoose.Schema(
    {
        email: {type: String, required: true, unique: true},
        passwordHash: {type: String, required: true},
        fullName: {type:String, required:true},
        salt: {type: String, required: true}
    }
);
