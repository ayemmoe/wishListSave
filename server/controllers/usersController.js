const User = require('../Models/userModel');

const usersController = {};


usersController.createAccount = (req, res, next) => {

    User.create(req.body)
    .then (data => {
        console.log(data);
        next()
    })
    .catch (err => {
        next({
            log: `usersController.createAccount: ERROR :${err}`,
            message: {err : 'Error occurred in usersController.createAccount'}
        })
    })
};


usersController.verifyUser = (req, res, next) => {
    console.log('I am in verify');
    console.log(req.body);
    User.findOne({username: req.body.username})
    .then(user => {
        if(user) {
            console.log('User', user);
            user.comparePassword(req.body.password, (err, isMatched) => {
                if(err) throw err;

                if(isMatched) {
                    res.locals.authenticated = true;
                    res.data = {user_id: user._id};
                    return next();
                }
            })
        } else {
            res.send('error');
            next()
        }
    })
    .catch(err => {
        next({
            log: `usersController.verifyUser: ERROR :${err}`,
            message: {err : 'Error occurred in usersController.verifyUser'}
        })
    })
}



module.exports = usersController;
