const db = require('../db/models/UserModel')

class siteWebController {
    test = (req,res) => {
        console.log("Connecting to site...")
    }    
}

module.exports = new siteWebController();