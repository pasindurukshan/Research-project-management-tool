const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name is required']},
    staffId: {type: String, required: [true, 'Staff ID is required']},
    email: {type: String, required: [true, 'Email is required']},
    password: {type: String, required: [true, 'Password is required']},
    role: {type: String, required: [true, 'Post is required']},
})

module.exports = mongoose.model('Staff', staffSchema); 