const roleService = require('../services/RoleService');

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
              return res.status(400).json(err);
          })
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
                return res.status(400).json(err);
            })
    }
}

module.exports = new RoleController();