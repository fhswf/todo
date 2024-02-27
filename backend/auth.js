
import passport from 'passport';
import { getRandomValues } from 'crypto';

let state_dict={};

let authenticate = (req, res, next) => passport.authenticate('jwt',
    { session: false },
    (err, user, info) => {
        
        //console.log("authenticate: %j %j %j", err, user, info)
        if (!user) {
            let data = new Uint8Array(16);
            getRandomValues(data);
            let state = Buffer.from(data).toString('base64');
            state_dict[state] = Date.now()
            console.log(state_dict[state])
            res.cookie("state", state, { maxAge: 900000, httpOnly: false })
            res.status(401)
            res.send({ error: "Unauthorized" })
            return
        }

        next()
    })(req, res, next)


export {authenticate, state_dict}