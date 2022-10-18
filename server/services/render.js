const axios = require('axios');
exports.homeRouter = (req, res) => {
    //Make a get request to /api/users
    axios.get('http://localhost:3000/api/user').then(function (response) {
        // console.log(response)
        res.render('index', { users: response.data });
    }).catch((err) => {
        console.log(err)
    });


}
exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    // res.render('update_user');
    axios.get('http://localhost:3000/api/user', { params: { id: req.query.id } })
        .then((result) => {
            // console.log(result.data)
            res.render("update_user", { user: result.data })

        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
            return;
        })
};