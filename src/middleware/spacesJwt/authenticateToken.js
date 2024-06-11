// const jwt = require('jsonwebtoken');

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     if (!authHeader){
//      return res.status(401).send('no auth');
//     }
//     const [type, token]  = authHeader.split(' ');
//     if(type !== 'Bearer' || !token){
//         return res.status(401).send('no Bearer token');
//     }

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.status(403).send('Invalid Token');
//         req.user = user;
//         next();
//     });
// }

// module.exports = { authenticateToken };
