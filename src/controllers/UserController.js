var jwt = require("jsonwebtoken");
const db = require('../db/models/UserModel')
const userService = require('../services/UserService');
const { sendVerifyRegister } = require("../helper/SendEmail");

class userController {
   // POST : /register
    register = async (req,res) => {
      const user = req.body  
      await userService.registerAccount(user)
        .then( async data => {
         if(data !== "EMAIL DUPPLICATE")
            {
            await sendVerifyRegister(data);
             return res.status(200).json(data);
            } else {
                return res.status(400).json("Lỗi, trùng email")
            }   
        })
        .catch(err => {
         return res.status(500).json(err);
        })
    }
    //POST : /verify
    verifyAccount = async (req, res) => { 
        return await userService.verifyAccount(req.body)
        .then(data => {
            data === "Invalid verification code"?res.status(400).send("Invalid code"): res.status(200).send(data);
        }).catch(err => { 
            res.status(400).send(err)
        })
    }

    // POST : /login
    login = async (req,res) => {
      return await userService.login(req.body)
        .then(data=>{
            data === "Invalid Password!"|| data ==="account Not found" || data === "unverified account"?res.status(400).send("login fail"):res.status(200).send(data);
        }).catch(err=>{
            res.status(400).send(err)
        })
    }
    // POST : /logout
    logout = async (req,res) => {
        const authToken = req.headers.authorization;

  const { userId } = jwt.verify(authToken, process.env.jwtsecret);

  await database.Token.destroy({
    where: {
      user_id: userId,
      token: authToken
    }
  });
        
}

    // GET user JSON
    getAllUser = async (req, res)=>{
        return await userService.getAllUser()
        .then(data=>{
            if(data){
                res.status(200).json(data);
            }else res.status(400).send([]);
        }).catch(err=>{
            res.status(500).send(err.message);
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
    changePassword = async (req,res) => {
        const password = req.body;
        const conditionObj = {
            userId: req.params.userId
        }
        await userService.updatePassword(password, conditionObj)
        .then(data => {
            if (data)
                return res.status(200).send("Cập nhật mật khẩu thành công.")
            return res.status(400).send("Không tìm thấy dữ liệu cần cập nhật.");
        })
        .catch(err => {
            return res.status(400).json(err);
        })
    }
    forgotPassword = async(req,res) => {
        await userService.forgotPassword(req.body)
        .then(data => {
            if(data === "account Not found") {
                return res.status(400).send("account not found")
            }
                return res.status(200).send("Send completed successfully")
        })
        .catch(err => {
            return res.status(400).json(err);
        })

    }
}

module.exports = new userController();