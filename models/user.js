// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    price: Number,
    discount: Number,
    image:String,
    delivery:String,
    description:String
});

const User = mongoose.model('User', userSchema);

module.exports = User;