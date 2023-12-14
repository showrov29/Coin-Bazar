require("dotenv").config();
const config = require("../config/config");
const passport = require("passport");
const User = require("../model/user.model");
const JwtStrategy = require("passport-jwt").Strategy,
	ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.config.SECRET_KEY;

passport.use(
	new JwtStrategy(opts, function (jwt_payload, done) {
		User.findOne({ id: jwt_payload.sub })
			.then((res) => {
				console.log(jwt_payload.id);
				return done(null, jwt_payload);
			})
			.catch((err) => {
				return done(err);
			});
	})
);
