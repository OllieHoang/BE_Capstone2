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
    
    //POST: /update/:userId
    updateUser = async (req, res, next) => {
      const user = req.body;
      const conditionObj = {
          userId: req.params.userId
      }
      await userService.updateUser(user, conditionObj)
          .then(data => {
              if (data)
                  return res.status(200).send("Cập nhật user thành công.")
              return res.status(400).send("Không tìm thấy dữ liệu cần cập nhật.");
          })
          .catch(err => {
              return res.status(400).json(err);
          })
  }
}

module.exports = new userController();