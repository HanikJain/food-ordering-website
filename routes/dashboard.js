const UserModel = require('../model/user');

module.exports = (app) => {    
    app.post('/api/dashboard', async (req, res) => {

      if(Object.keys(req.body).length === 0) {
        res.sendStatus(422)
      }
      else{
        const userExists = await UserModel.findOne({email:req.body.email})
        if(userExists){
          res.json(userExists)
        } else {
            res.sendStatus(500);
        }
      }

    });

}
