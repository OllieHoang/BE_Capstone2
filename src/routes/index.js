const userAPI = require('./API/userAPI');
const roleAPI = require('./API/roleAPI');
// const qrcodeAPI = require('./API/qrcodeAPI');


function router(server) {

    server.use('/api/user', userAPI);

    server.use('/api/role', roleAPI);

    // server.use('/api/qrcode', qrcodeAPI);


}



module.exports = router;