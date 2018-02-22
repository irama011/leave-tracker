const express = require('express');
const app = express();
const port = process.env.port || 3000;
const user = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const db = require('./config/database');
const passport = require('passport');


//Adding passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
//Use Body Parser
app.use(bodyParser.json());
//Use Cors middleware
app.use(cors());
//Set up Routes
app.use('/user',user)
//Serve Static
app.use(express.static(path.join(__dirname,'public')));
mongoose.connect(db.database);

app.listen(port,()=>{
    console.log('App Listening on Port:',port);
})