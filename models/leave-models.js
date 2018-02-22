const mongoose = require('mongoose');
const db = require('../config/database');

const LeaveSchema = mongoose.Schema({
    name:{
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
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    status:{
        type:String
    },
    comments:{
        type:String
    },
});

const leaves = mongoose.model('leaves',LeaveSchema);

module.exports = leaves;

module.exports.applyLeave = function(leave,callback){
    leave.save(callback);
}

module.exports.getLeaves = function({},callback){
    leaves.find({},callback);
}

module.exports.getLeavesForApproval = function({},callback){
    const query = {status:'Pending'};
    leaves.find(query,callback);
}

module.exports.approveLeaves = function(details,callback){
    console.log('Details Value:',details);
    const query = {_id:details.id};
    const updates = {status:details.status,comments:details.comment};
    leaves.find(query,(data)=>{
        console.log(data);
    })
    leaves.update(query,{$set:{status:details.status,comments:details.comment}},callback);
}