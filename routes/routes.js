const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const userModel = require('../models/user-models');
const leaveModel = require('../models/leave-models');
const db = require('../config/database');
const jwt = require('jsonwebtoken');


router.post('/register', (req, res, next) => {
    console.log(req.body);
    let newuser = new userModel({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
        team: req.body.team,
        isAdmin: 0
    })

    userModel.addUser(newuser, (err, user) => {
        if (err) res.json({ success: false, msg: 'Failed to register user!!' });
        else res.json({ success: true, msg: 'User registered successfully!!' });
    });

});

router.get('/register',(req,res,next)=>{
    userModel.findUsers({},(err,user)=>{
        if(err) return err;
        else {
            res.json(user);
        }
    })
    
})


router.post('/authenticate', (req, res) => {
    console.log("Request:",req.body);
    const username = req.body.username;
    const password = req.body.password;
    userModel.findUserByName(username, (err, user) => {
        if (!user) {
            console.log("User Not Found!!");
            throw err;
        } 
        else {
            userModel.comparePassword(password, user.password, (err, isMatch) => {
                if (err){
                    console.log("User and Password do not match");
                    throw err;
                    
                } 
                if (isMatch) {
                    const token = jwt.sign(user.toJSON(), db.secret, { expiresIn: 3600 });
                    res.json({
                        success: true,
                        token: 'JWT' + token,
                        user: {
                            name: user.name,
                            username: user.username,
                            role: user.role,
                            team: user.team,
                            isAdmin: user.isAdmin
                        }
                    })
                } else {
                    res.json({ success: false, msg: 'Authentication Failed' });
                }

            })
        }

    })
});



router.get('/apply-leave', (req, res) => {
    leaveModel.getLeaves({},(err,data)=>{
        if(err) throw err;
        else{
            res.json(data);
        }
    })
});

router.post('/apply-leave', (req, res) => {
    let leave = new leaveModel({
        name:req.body.name,
        role:req.body.role,
        team:req.body.team,
        to:req.body.to,
        from:req.body.from,
        status:'Pending',
        comments:""
    })
    leaveModel.applyLeave(leave,(err,data)=>{
        if(err){
            res.json({success:false,msg:'Something went wrong'})
        }else{
            res.json({success:true,msg:"Leave applied successfully!!"})
        }
    })
});

router.get('/approve-leave', (req, res) => {
    leaveModel.getLeavesForApproval({},(err,data)=>{
        if(err) throw err;
        else{
            res.json(data);
        }
    })
});

router.put('/approve-leave', (req, res) => {
    console.log('Req Body:',req.body);
    let detailsToUpdate = {
        id:req.body.id,
        status:req.body.status,
        comment:req.body.comment
    }
   
    leaveModel.approveLeaves(detailsToUpdate,(err,data)=>{
        if(err) res.json({success:false,msg:"Failed to approve leave"});
        else{
            console.log('Data recieved:',data);
            res.json({success:true,msg:"Leave approved successfully"});
        }
    })
});

module.exports = router;
