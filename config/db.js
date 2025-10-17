require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongodb+srv://alfredpcleung_db_user:PKLcbeqt3Vl3VBES@cluster0.cr03ajv.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}