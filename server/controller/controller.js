
const UserDb = require("./../model/model");

//create anf save ew user
exports.create = async (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    //new user
    let { name, email, gender, status } = req.body
    const user = new UserDb({
        name,
        email,
        gender,
        status,
    });
    user
        .save(user)
        .then(result => {
            // res.send(result)
            res.redirect("/")

        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            })
        })
}
//retrieve and return all  users/ retrieve and return a single user
exports.find = (req, res) => {
    const { id } = req.query;
    // console.log(id)
    if (id) {
        UserDb.findById(id).then((result) => {
            if (!result) {
                res.status(404).send({ message: `Not found with id = ${id}` })
            } else {
                res.send(result)
            }
        }).catch((err) => {
            res.status(500).send({ message: `Error retrieving user with id= ${id}` })
        });
    }else{
        
        UserDb.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a find operation"
            })
        });
    }
    
}
//Update a new identified user by user id
exports.update = (req, res) => {
    // console.log(req.body);
    let { name, email, gender, status } = req.body
    const { id } = req.params;
    // console.log(id)
    if (!req.body) {
        return res.status(400).send({ message: "Data to update can not be empty!" })
    }

    UserDb.findByIdAndUpdate(id, { name, email, gender, status }).then(data => {
        if (!data) {
            // console.log(data)
            res.status(400).send({ message: `Cannot Update user with ${id}. Maybe user not found` })
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send({ message: 'Error Update user information' })
    })
}
//Delete a user with specified user id in the request
exports.delete = (req, res) => {
    const { id } = req.params;
    UserDb.findByIdAndDelete(id).then((result) => {
        if (!result) {
            res.status(404).send({ message: `Cannot Delete with id ${id}.Maybe id is wrong` })
        } else {
            res.send({ message: `Deleted!` })
        }
    }).catch((err) => {
        // console.log(err)
        res.status(500).send({ message: `Could not delete User with id = ${id}` })
    });
}