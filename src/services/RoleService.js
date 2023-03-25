const { Role } = require("../db/postgresql/PostgreSQL");

class RoleService {

    //Thêm role
    addRole = async (e) => {
        // let roleId= e.roleID;
        let roleName= e.roleName;
        const role = await Role.create({
            // roleId: roleId,
            roleName: roleName,
        })
        return role;
    }
    getRoleByRoleName = async (roleName) =>{
        const role = await Role.findOne({
            where:{
                roleName
            }, raw: true
        })
        return role;
    }

    }

    module.exports = new RoleService();