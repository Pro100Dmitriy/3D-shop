const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isActivated: {
        type: String,
        default: false
    },
    activationLink: {
        type: String
    }
})

module.exports = mongoose.model( 'User', userSchema )