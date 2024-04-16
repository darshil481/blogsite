const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    mobile_no: { type: String },
    userName: { type: String, required: true },
    password: { type: String },
    email: { type: String, unique: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;