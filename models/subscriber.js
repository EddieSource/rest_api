const mongoose = require('mongoose')

//create a schema
const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    subscriberToChannel: {
        type: String, 
        required:true
    }, 
    subscribeDate: {
        type: Date, 
        required: true, 
        default: Date.now
    }
})

//reason: model allows interface directly with the db using the schema
modules.exports = mongoose.model('Subscriber', subscriberSchema)