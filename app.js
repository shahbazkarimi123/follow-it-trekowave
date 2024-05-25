const express = require('express');
const bodyParse = require('body-parser');

const login = require('./routes/authentication/login');
const map = require('./routes/screen/map');
const home = require('./routes/screen/home');
const mapHistory = require('./routes/screen/mapHistory');
const path = require('path');
const rootDir = require('./util/path');
const app = express();

const getStayAndStatData = require('./models/getStayAndStatData');

app.use(bodyParse.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir,'public')));
app.set('view engine','ejs');
app.set('views','./views');

app.use(map);
app.use(login);
app.use(home);
app.use('/map',mapHistory);

// app.get('/getStayData/:terminalID', (req, res) => {
//     const terminalID = req.params.terminalID;
//     const data = getStayAndStatData(terminalID);
//     res.json(data);
// });



app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found</h1>");
    console.log();
});


app.listen(3000);

