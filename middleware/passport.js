require('dotenv').config();
const passport=require('passport');
const User=require('../model/user.model')
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub})
    .then(res=>{
        return done(null, res)
    })
    .catch(err=>{
        return done(err)
    })
}));