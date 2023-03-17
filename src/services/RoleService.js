const { Role } = require("../db/postgresql/PostgreSQL");

class RoleService {

    //Thêm role
    addRole = async (roleName) => {
        const newRole = await Role.create({roleName: roleName.trim()})
        return newRole;
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