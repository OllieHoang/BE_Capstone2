const userAPI = require('./API/userAPI');
const roleAPI = require('./API/roleAPI');
const userRoleAPI = require('./API/user_roleAPI');

function router(server) {

    server.use('/api/user', userAPI);

    server.use('/api/role', roleAPI);

    server.use('/api/userrole', userRoleAPI);

}



module.exports = router;