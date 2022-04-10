const axios = require("axios");

const UserModel = require('../model/user');


module.exports = (app) => {    
    app.post('/api/register', async (req, res) => {

      if(Object.keys(req.body).length === 0) {
        res.sendStatus(422)
      }
      else{
        const userExists = await UserModel.findOne({email:req.body.email})
        if(userExists){
          res.sendStatus(500)
        } else {
          const user = new UserModel(req.body);
          const savedUser = await user.save();
          if(savedUser === user){
            res.sendStatus(200);
          } else {
            res.sendStatus(500);
          }
        }
      }

    });

}





        
// const options = {
//   method: "POST",
//   url:`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_AUTH_API}`,
//   headers: {
//     "Content-Type": "application/json",
//   },
//   data: {
//     email: req.body.email,
//     password: req.body.password,
//     returnSecureToken: true
//   }
// }

// console.log("working")
// axios.request(options)
// .then((response) => {
//   if(response.ok) {
//     console.log("Success")
//     res.sendStatus(200);
//   }else {
//     console.log("Failed")
//     res.sendStatus(500);
//   }
// })
// .catch(err => {
//   console.log(err.message, "error");
//   res.sendStatus(500);
// });