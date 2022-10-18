const User = require("../model/user");

class UserService {

    getListUser = async () => {
        return await User.find();
    }

    getUserById = async (id) => {
        return await User.findById(id);
    }

    insertUser = async (user) => {
        const newUser = new User(user);
        await newUser.save()
    }

    updateUser = async (user) => {
        const { id, name, email, gender, status } = user;
        await User.findByIdAndUpdate(id, { name, email, gender, status })
    }

    deleteUser = async (id) => {
        await User.findByIdAndDelete(id);
    }

}
module.exports = UserService;