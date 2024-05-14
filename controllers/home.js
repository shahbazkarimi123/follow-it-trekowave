const path = require('path');
const rootDir = require('../util/path');

exports.getHomePage = (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','screen','home-page.html'));
};

