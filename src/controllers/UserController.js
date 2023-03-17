const db = require('../db/models/UserModel')
const userService = require('../services/UserService');

class userController {
   // POST : /register
    register = async (req,res) => {
      const user = req.body  
      await userService.registerAccount(user)
        .then(data => {
         if(data !== "EMAIL DUPPLICATE") 
            return res.status(200).json(data);
         return res.status(400).json("Lỗi, trùng email")
        })
        .catch(err => {
         return res.status(500).json(err);
        })
    }
    // POST : /login
    login = async (req,res) => {
      return await userService.login(req.body)
        .then( data=>{
            data === "Invalid Password!"|| data ==="account Not found"?res.status(400).send("login fail"):res.status(200).send(data);
        }).catch(err=>{
            res.status(400).send(err)
        })
    }
}

module.exports = new userController();