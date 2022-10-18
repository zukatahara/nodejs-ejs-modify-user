const UserDB = require("./../model/model");

class UserService {

    getListUser = async () => {
        return await UserDB.find();
    }

    getUserById = async (id) => {
        return await UserDB.findById(id);
    }

    insertUser = async (user) => {
        const newUser = new UserDB(user);
        await newUser.save()
    }

    updateUser = async (user) => {
        console.log('user', user);
        const { id, name, email, gender, status } = user;
        await UserDB.findByIdAndUpdate(id, { name, email, gender, status })
    }

    deleteUser = async (id) => {
        await UserDB.findByIdAndDelete(id);
    }

}
module.exports = UserService;