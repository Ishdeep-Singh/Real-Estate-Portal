const mongoose = require("mongoose")

//Attributes of every user who lists their property or/and want to buy
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 12,
    },
    profileImg:{
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)