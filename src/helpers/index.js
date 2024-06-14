const crypto = require('crypto');
const SECRET = 'JAMES-REST-API';

     // .- Convert the buffer in and encoded string in base64
const random = () => crypto.randomBytes(116).toString('base64');
const authentication = (salt, password) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};
module.exports = {
    random,
    authentication
};
