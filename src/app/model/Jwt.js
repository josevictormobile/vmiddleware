const jwt = require('jsonwebtoken');

class Jwt_model{

    constructor(){
    }

    login(callback){
        const user = {
            id: 1,
            username: 'admin',
            email: 'admin@gmail.com'
        }

        jwt.sign({user}, 'secretkey', (err, token) => {

            setTimeout(() => {
                return callback({token});
            });

        });
    }

    // Verify Token
    verifyToken(req, res, next) {
        // Get auth header value
        const bearerHeader = req.headers['authorization'];
        // Check if bearer is undefined
        if(typeof bearerHeader !== 'undefined') {
            // Split at the space
            const bearer = bearerHeader.split(' ');
            // Get token from array
            const bearerToken = bearer[1];
            // Set the token
            req.token = bearerToken;
            // Next middleware
            next();
        } else {
            // Forbidden
            res.sendStatus(403);
        }

    }


}

module.exports = Jwt_model;