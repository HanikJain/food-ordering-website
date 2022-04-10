const UserModel = require('../model/user');

module.exports = (app) => {
    app.post('/api/login', async (req, res) => {
        const result = await UserModel.findOne({email: req.body.email});
        if(result){
            const passwordResult = await UserModel.findOne({password: req.body.password});
            if(passwordResult){
                res.sendStatus(200);
            }else{
                res.sendStatus(500);
            }
        } else{
            res.sendStatus(500);
        }
    })
}