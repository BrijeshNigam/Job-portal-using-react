const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model('User', userSchema);