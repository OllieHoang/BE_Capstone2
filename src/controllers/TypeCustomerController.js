// const db = require('../db/models/UserModel')
const database = require("../db/postgresql/postgreSQL");
// const userService = require('../services/UserService');

class TypeCustomerController {
    ChangeTypeCustomer = async(req, res)=>{
        const { userId, userTypeId } = req.body;
        try {
            console.log(userId , userTypeId);
            await database.User.update({ userTypeId: userTypeId }, {
              where: { userId: userId }
            }).then(data =>{
                res.status(200).json({
                    message: 'Type updated successfully',
                  });
            }).catch(err=>{
                res.status(400).json(err);
            })
          } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
          }
    }
    UserType = async(req, res)=>{
        const { name, description, isPaid } = req.body;
        try {
            const userType = await database.TypeCustomer.create({ name, description, isPaid });
            res.json(userType);
            } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}
    
module.exports = new TypeCustomerController();