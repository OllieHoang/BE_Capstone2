const userAPI = require('./API/userAPI');

function router(server) {
    server.use('/api/user', userAPI);
}



module.exports = router;