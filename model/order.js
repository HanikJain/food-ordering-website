const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userData: {
        name: {type: 'string', required: true},
        address: {type: 'string', required: true},
        pincode: {type: 'string', required: true},
        city: {type: 'string', required: true}
    },
    orderItems: Array,
    email: {type: 'string', required: true},
    amount: {type: 'string', required: true},
    month: {type: 'string', required: true},
    day: {type: 'number', required: true}
  });
  

const OrderModel = mongoose.model('order', orderSchema);  
module.exports = OrderModel;