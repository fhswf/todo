import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyn2vP592Ju/iKXQW1DCrSTXyQXyo11Qed1SdzFWC+mRtdgioKibzYMBt2MfAJa6YoyrVNgOtGvK659MjHALtotPQGmis1VVvBeMFdfh+zyFJi8NPqgBTXz6bQfnu85dbxVAg95J+1Ud0m4IUXME1ElOyp1pi88+w0C6ErVcFCyEDS3uAajBY6vBIuPrlokbl6RDcvR9zX85s+R/s7JeP1XV/e8gbnYgZwxcn/6+7moHPDl4LqvVDKnDq9n4W6561s8zzw8EoAwwYXUC3ZPe2/3DcUCh+zTF2nOy8HiN808CzqLq1VeD13q9DgkAmBWFNSaXb6vK6RIQ9+zr2cwdXiwIDAQAB
-----END PUBLIC KEY-----`,
  ignoreExpiration: true,
  issuer: "https://jupiter.fh-swf.de/keycloak/realms/webentwicklung"
};

passport.use(
  new JwtStrategy(opts, (payload, done) => {
    return done(null, payload);
  })
);

function authenticate(request, response, next) {
  return passport.authenticate('jwt', { session: false, }, async (error, token) => {
    if (error || !token) {
      response.status(401)
      response.send({ error: 'Unauthorized' });
    } else {
      next();
    }
  })(request, response, next);
}

export default authenticate; 