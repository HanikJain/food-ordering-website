const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: 'string', required: true},
    email: {type: 'string', required: true, unique: true},
    order: {type: [Object], default: []}
  });
  

const UserModel = mongoose.model('user', userSchema);  
module.exports = UserModel;