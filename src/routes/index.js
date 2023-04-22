const userAPI = require('./API/userAPI');
const roleAPI = require('./API/roleAPI');
const qrcodeAPI = require('./API/qrCodeAPI');
const typecustomer = require('./API/typeCustomerAPI')
// const informationAPI = require('./API/informationAPI');

function router(server) {

    server.use('/api/user', userAPI);

    server.use('/api/role', roleAPI);

    server.use('/api/qrcode', qrcodeAPI);

    server.use('/api/typecustomer', typecustomer);

    // server.user('/api/information', informationAPI)
}



module.exports = router;