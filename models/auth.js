let mongoose = require('mongoose')
AuthSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    email: {
        type: 'String',
        required: true
    },
    password: {
        type: 'String',
        required: true
    },
    avatar: {
        type: 'String',

    },
    data: {
        type: Date,
        default: Date.now
    }
})
module.exports = Auth = mongoose.model("auth", AuthSchema)