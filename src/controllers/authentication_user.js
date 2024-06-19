const jwt = require('jsonwebtoken')
const { getUsersByEmail, createUser } = require('../Models/users_db');
const { authentication, random } = require('../Helpers');
/** 
 * 
*/
exports.register = async (req, res) => {
   try {
      const { email, password } = req.body;
      if (!email || !password) {
         return res.status(400).json({ message: 'email or password' });
      }
      // .- check if the user with that email
      const existingUser = await getUsersByEmail(email);
      if (existingUser) {
         return res.status(400).json({ message: 'user already exists' });
      }
      // .- create in user
      const salt = random();
      const user = await createUser({
         email,
         authentication: {
            salt,
            password: authentication(salt, password)
         }
      });
      return res.status(200).json(user);

   } catch (error) {
      console.error(error);
      return res.sendStatus(500);
   }
};
         // .- Login
exports.login = async (req, res) => {
   try {
      const { email, password } = req.body;
      if (!email || !password) {
         return res.sendStatus(401);
      }
         // .- We Check If There Is a User With That id.
      const user = await getUsersByEmail(email).select('+authentication.salt +authentication.password');
      if(!user){
      res.sendStatus(400);
    }
         // .- Check if the hashed password is the same in DB
      const expecHash = authentication(user.authentication.salt, password);

         // .- If it is Not The Hash Password We Return Error
      if(user.authentication.password !== expecHash){
      res.sendStatus(400)
    }
        // .-User Token.
      const salt = random();
      user.authentication.sessionToken = authentication(salt, user._id.toString());

      await user.save();

      res.cookie('JAMES-REST-API', user.authentication.sessionToken, { domain: 'localhost', path: '/' });
      const accessToken =jwt.sign({email: user.email}, process.env.ACCESS_TOKEN_SECRET);
      res.status(200).json({accessToken}).end();
   
   } catch (error) {
      console.error(error);
      return res.sendStatus(400);      
   }
}