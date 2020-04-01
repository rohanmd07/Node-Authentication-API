const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/database');


const app = express();

const users = require('./routes/users');

// Database connection
mongoose.connect('mongodb://localhost:27017/meanauthapp',{ useNewUrlParser: true,  useUnifiedTopology: true  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


// Port number 
const port = 3000;

// cors
app.use(cors());

app.use(express.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);


// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/users',users);

app.get('/',(req,res) => {
    res.send('Invalid Endpoint');
});


app.listen(port,()=> {
    console.log('server started at port:'+port);
});