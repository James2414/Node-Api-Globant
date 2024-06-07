const mongoose = require('mongoose');

// Definimos estructura de Doc dentro de una coleccion de usuarios en mongoo
const UserSchema = new mongoose.Schema({
    email: String,
    authentication: {
        password: { type: String, required: true },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
});
     // .- Model User
const UserModel = mongoose.model('User', UserSchema);

     // .- We define funtions to interact witch the data base 
const getUsers = () => UserModel.find();
const getUsersByEmail = (email) => UserModel.findOne({ email });

const getUsersByToken = (sessionToken) => UserModel.findOne({ 'authentication.sessionToken' : sessionToken }); 

const getUsersById = (id) => UserModel.findById(id);
const createUser = (values) => {
    const newUser = new UserModel(values);
     // .- Save the new user in data base
    return newUser.save();
};
const deleteUserById = (id) => UserModel.findByIdAndDelete(id);
const updateUser = (id, values) => UserModel.findByIdAndUpdate(id, values, { new: true });

module.exports = {
    getUsers,
    UserModel,
    getUsersByEmail,
    getUsersById,
    createUser,
    deleteUserById,
    updateUser,
    getUsersByToken,
};
