const mongoose = require('mongoose');
const uri = require('./psw.js').mongoURI;

mongoose
    .connect(uri, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection;

module.exports = db;