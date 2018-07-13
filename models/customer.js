const mongoose = require('mongoose');

// Customer Schema
const customerSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: Number },
    email: { type: String }
});

// Define and support
module.exports = mongoose.model('Customer', customerSchema);