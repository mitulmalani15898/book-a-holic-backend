const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        default:null,
        required: false,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    occupation:{
        type: String,
        default:null,
        required: false,
    },
    preferences:{
        type: String,
        default:null,
        required: false,
    },
    avatar:{
        type: String,
    },
    date:{
        type:Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("User", userModel);