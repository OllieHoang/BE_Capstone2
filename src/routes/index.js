const userAPI = require('./API/userAPI');
const roleAPI = require('./API/roleAPI');

function router(server) {

    server.use('/api/user', userAPI);

    server.use('/api/role', roleAPI);


}



module.exports = router;