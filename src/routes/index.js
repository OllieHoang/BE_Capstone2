const siteAPI = require('./API/siteAPI');

function router(server) {
    server.use('/api', siteAPI);
}

module.exports = router;