
const UserService = require('../services/user');
const CustomError = require('../middleware/customError');
class UserController {
    getListUser = async (req, res, next) => {
        try {
            const userService = new UserService();
            const users = await userService.getListUser();

            return users;
        } catch (e) {
            if (e instanceof CustomError) {
                const { httpCodes, errorCode, message } = e
                res.status(httpCodes || 400).send({ errorCode, message })
            }
            return next(e);
        }
    }

    getUserById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const userService = new UserService();
            const user = await userService.getUserById(id);
            if (!user) {
                throw CustomError(404, 'NOT_FOUND', 'User not found!')
            }

            return user;
        } catch (e) {
            if (e instanceof CustomError) {
                const { httpCodes, errorCode, message } = e
                res.status(httpCodes || 400).send({ errorCode, message })
            }
            return next(e);
        }
    }

    insertUser = async (req, res, next) => {
        try {
            const userService = new UserService();
            await userService.insertUser(req.body);

            res.redirect('/');
        } catch (e) {
            if (e instanceof CustomError) {
                const { httpCodes, errorCode, message } = e
                res.status(httpCodes || 400).send({ errorCode, message })
            }
            return next(e);
        }
    }

    updateUser = async (req, res, next) => {
        try {
            const userService = new UserService();
            await userService.updateUser(req.body);

            res.redirect('/');
        } catch (e) {
            if (e instanceof CustomError) {
                const { httpCodes, errorCode, message } = e
                res.status(httpCodes || 400).send({ errorCode, message })
            }
            return next(e);
        }
    }

    deleteUser = async (req, res, next) => {
        try {
            const userService = new UserService();
            await userService.deleteUser(req.params.id);

            res.redirect('/');
        } catch (e) {
            if (e instanceof CustomError) {
                const { httpCodes, errorCode, message } = e
                res.status(httpCodes || 400).send({ errorCode, message })
            }
            return next(e);
        }
    }


}


module.exports = UserController;