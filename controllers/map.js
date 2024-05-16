const path = require('path');
const rootDir = require('../util/path');

exports.postMap = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','screen','map.html'));
};