import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import fs from 'fs';

const publicKey = fs.readFileSync('./public.pem', 'utf8'); // Lese den öffentlichen Schlüssel aus einer Datei ein

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: publicKey
};

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    // Hier kannst du deine Benutzerdatenbank oder andere Methoden verwenden, um den Benutzer anhand des JWT-Payloads zu identifizieren
    // In diesem Beispiel gehe ich davon aus, dass der Benutzer direkt aus dem Payload extrahiert werden kann
    const user = jwt_payload;

    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
}));

const authenticate = (req, res, next) => {
    // Überprüfe, ob der Authorization-Header im Request vorhanden ist
    if (!req.headers.authorization) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        // Authentifizierung erfolgreich
        next();
    })(req, res, next);
};

export default authenticate;
