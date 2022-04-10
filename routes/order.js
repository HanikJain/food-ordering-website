const OrderModel = require("../model/order");
const  UserModel = require('../model/user');

module.exports = (app) => {   
    app.post('/api/order', async (req, res) => {
      if(Object.keys(req.body).length === 0) {
        res.sendStatus(422)
      }
      else{
        const newOrder = new OrderModel(req.body);
        let savedOrder = await newOrder.save();
        if(savedOrder === newOrder) {
            try {
              await UserModel.findOneAndUpdate(
                {email: req.body.email},
                {$push: { order: newOrder }}
              );
              res.sendStatus(200);
              
            } catch (error) {
              res.sendStatus(500);
            }
        } else {
            res.sendStatus(500);
        }
      }
    })

}