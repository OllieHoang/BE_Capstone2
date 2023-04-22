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
    //GET : /verify
    verifyAccount = async (req, res) => {
        const verify = req.query.id
        console.log("Query id:" + verify);
        return await userService.verifyAccount(verify)
        .then(data => {
            data === "Invalid" || data === "Verified"? res.status(400).send("Không tìm thấy dữ liệu cần cập nhật hoặc đã cập nhật") :  res.redirect('http://localhost:3000/login');
        }).catch(err => { 
            res.status(500).send(err)
        })
    }

    // POST : /login
    login = async (req,res) => {
      return await userService.login(req.body)
        .then(data=>{
            data === "Invalid Password!"|| data ==="account Not found" || data === "unverified account"?res.status(400).send("login fail"):res.status(200).send(data);
        }).catch(err=>{
            res.status(500).send(err)
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
    //GET /profile/:userId
    profile = async (req,res) => {
        const conditionObj = {
            userId: req.params.userId
        }
        console.log("params: "+ req.params.userId)
        return await userService.profile(conditionObj)
        .then(data => {
            console.log(data);
        data ? res.status(200).json(data) : res.tatus(400).send([]);
        })
        .catch(err => {
            res.status(500).json(err);
        })
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
    //   console.log("params: "+ req.params.userId);
    //   console.log(req.params);
      const conditionObj = {
          userId: req.params.userId
      }
      await userService.updateUser(user, conditionObj)
          .then(data => {
              if (data)
                  return res.status(200).send(data)
              return res.status(400).send("Không tìm thấy dữ liệu cần cập nhật.");
          })
          .catch(err => {
              return res.status(500).json(err);
          })
  }
  // POST api/user/password/:userId
    changePassword = async (req,res) => {
        const password = req.body;
        const conditionObj = {
            userId: req.params.userId
        }
        await userService.changePassword(password, conditionObj)
        .then(data => {
            data === "wrong password!"
            ? res.status(400).send("Sai mật khẩu cũ.")
            : res.status(200).send("Cập nhật mật khẩu thành công.")
        })
        .catch(err => {
            return res.status(500).json(err);
        })
    }
    
    // POST api/user/forgot/:userId
    handlePasswordReset = async (req,res) => {
        const password = req.body;
        const conditionObj = {
            userId: req.params.userId
        }
        await userService.handlePasswordReset(password, conditionObj)
        .then(data => {
            data? res.status(200).send("Cập nhật mật khẩu thành công.") : res.status(400).send("Không tìm thấy dữ liệu cần cập nhật.")
        })
        .catch(err => {
            return res.status(500).json(err);
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
            return res.status(500).json(err);
        })

    }
}

module.exports = new userController();