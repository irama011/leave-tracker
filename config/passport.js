const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const db = require('../config/database');
const user = require('../models/user-models');

module.exports = function(passport){
    var options = {};
    options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    options.secretOrKey = db.secret;
    passport.use(new JwtStrategy(options,(jwt_payload,done)=>{
        user.getUserById(jwt_payload._id,(err,user)=>{
            if(err){
                console.log(err);
                throw err;
            }
            if(user) done(null,user);
            else done(null,false);
        })
    }))
}