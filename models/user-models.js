const mongoose = require('mongoose');
const db = require('../config/database');
const bcrypt= require('bcryptjs');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    team:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Number,
        required:true
    }
});

const user = mongoose.model('user',UserSchema);

module.exports = user;

module.exports.addUser = function(newuser,callback){
    if(newuser){
        
        if(newuser.role==="Manager"){
            newuser.isAdmin=1;
        }else{
            newuser.isAdmin=0;
        }
        
        bcrypt.genSalt(10,(err,salt)=>{
            if(err) console.log('Error:',err);
            else{
                bcrypt.hash(newuser.password,salt,(err,hash)=>{
                    newuser.password = hash;
                    newuser.save(callback);
                })
            }
        })
    }
}

module.exports.findUsers = function({},callback){
    user.find({},callback);
}

module.exports.findUserByName = function(name,callback){
    const query = {username:name};
    user.findOne(query,callback);
}

module.exports.getUserById = function(id,callback){
    user.findById(id,callback);
}

module.exports.comparePassword = function(pwd1,pwd2,callback){
   
    bcrypt.compare(pwd1,pwd2,(err,isMatch)=>{
        if(err) throw err;
        else{
           
            callback(null,isMatch)
        }
    });
}
