const bcrypt = require('bcrypt');
function hardCode(value) {
   const hard =  bcrypt.hashSync(value, 10);
   return hard;
}

module.exports = { hardCode };