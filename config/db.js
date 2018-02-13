const mongoose = require('mongoose');

// Map Global promises
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://natti:natti@ds229438.mlab.com:29438/oranit-save-the-date')
 .then(() => console.log('MongoDB Connected'))
 .catch(err => console.log(err));