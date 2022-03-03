const { append } = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const express = require("express");
const { applyTo } = require("ramda");
const {accounts,users,writeJSON} = require('./data.js');
const accountRoutes = require('./routes/accounts.js');
const servicesRoutes = require('./routes/services.js');

const app = express();
const port = 3000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: false}));


app.get('/', (req,res) => {
    res.render('index', {
        title: 'Account Summary',
        accounts: accounts
    });
});

app.get('/profile', (req,res)=>{
    res.render('profile', {
        user:users[0]
    });
});


app.use('/account',accountRoutes);
app.use('/services',servicesRoutes);



app.listen(port,(req,res) => {
    console.log("PS Project Running on port 3000!");
});


