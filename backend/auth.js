
import passport from 'passport';

let authenticate = (req, res, next) => {
    let responseObj = {
        statusCode: 0, 
        errorMsg: "",
        data: {}
    }

    return passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if (!user) {
            responseObj.data = info.message 
            responseObj.statusCode = 401 
            responseObj.error = "Unauthorized"
            return res.status(responseObj.statusCode).json(responseObj)
        }
        req.user = user;
        next();
     })(req, res, next);
}

export {authenticate}