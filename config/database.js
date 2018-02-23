//const MONGOLAB_URI = 'mongodb://rama:11@Gooner@ds247078.mlab.com:47078/users'
const url = "mongodb://user:pass@ds247078.mlab.com:47078/users";
console.log(url);
module.exports = {
    database: url||'mongodb://localhost:27017/users',
    secret:'11@Gooner'
}