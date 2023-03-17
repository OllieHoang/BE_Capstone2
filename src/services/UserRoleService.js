const { UserRole } = require("../db/postgresql/PostgreSQL");


class UserRoleService {

    //Thêm userRole
    addUserRole = async (userRole) => {
        const userRoleData = await UserRole.findOrCreate({
            where: {
                roleId: userRole.roleId,
                userId: userRole.userId
            },
            defaults: userRole
        })
        let check =  userRoleData.find(userRoleEle =>{
            return typeof userRoleEle === 'boolean';
        })
        return check ? userRoleData[0]:"ROLEID USERID DUPPLICATE";
    }

    

}

module.exports = new UserRoleService();