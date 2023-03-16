const db = require('../db/models/UserModel')
const registerService = require('../services/UserService');

class userController {
    register = async (req,res) => {
      const user = req.body  
      await registerService.registerAccount(user)
        .then(data => {
         if(data !== "EMAIL DUPPLICATE") 
            return res.status(200).json(data);
         return res.status(400).json("Lỗi, trùng email")
        })
        .catch(err => {
         return res.status(500).json(err);
        })
    }
}

module.exports = new userController();