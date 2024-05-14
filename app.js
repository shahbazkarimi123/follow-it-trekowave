const express = require('express');
const bodyParse = require('body-parser');

const login = require('./routes/authentication/login');
const map = require('./routes/screen/map');
const home = require('./routes/screen/home');
const path = require('path');
const rootDir = require('./util/path');
const app = express();

app.use(bodyParse.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir,'public')

))

app.use(map);
app.use(login);
app.use(home);

app.use((req,res,next)=>{
    res.status(404).send("<h1> Page Not found</h1>");
});


app.listen(3000);

