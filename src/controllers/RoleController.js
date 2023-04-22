const roleService = require('../services/RoleService');
const database = require("../db/postgresql/postgreSQL");

//api: /api/role/
class RoleController {
   addRole = async (req, res) => {
      const e = req.body;
      await roleService.addRole(e)
          .then(data =>{
              if(data)
                  return res.status(200).json(data);
              return res.status(400).json("Lỗi thêm role");
          })
          .catch(err=>{
              return res.status(500).json(err);
          })
  }
  // thay đổi role api/role/changerole
  changeRole = async (req, res) =>{
    try {
        const { userId, newRoleId } = req.body;
        console.log(userId , newRoleId);
        await database.User.update({ roleId: newRoleId }, {
          where: { userId: userId }
        }).then(data =>{
            res.status(200).json({
                message: 'Role updated successfully',
                  
              });
        })
       
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
      //Lấy thông tin role theo roleName
    //GET: /:roleName/get
    getRoleByRoleName = async (req, res, next) => {
        const roleName = req.params.roleName;
        await roleService.getRoleByRoleName(roleName)
            .then(data =>{
                return res.status(200).json(data);
            })
            .catch(err=>{
                return res.status(500).json(err);
            })
    }
}

module.exports = new RoleController();