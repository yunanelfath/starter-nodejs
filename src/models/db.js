const mongoose = require('mongoose');
const config = require('../config')

const { host, port, dbName, username, password } = config.mongodb

mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${dbName}`, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./job.model');
