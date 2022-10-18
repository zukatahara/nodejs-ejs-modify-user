const UserService = require('../services/user')
class ViewController {
    getHomePage = async (req, res, next) => {
        const userService = new UserService();
        const users = await userService.getListUser();
        res.render('index', { users });
    }

    addUser = (req, res, next) => {
        res.render('add_user');
    }

    updateUser = async (req, res, next) => {
        const userService = new UserService();
        const user = await userService.getUserById(req.query.id);
        res.render("update_user", { user })
    }
}

module.exports = ViewController;