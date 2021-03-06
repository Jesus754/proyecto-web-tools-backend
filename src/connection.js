require('./../src/config/config');
const mongoose = require('mongoose');

//const url = 'mongodb://jebu:123@localhost:27017/Taller_web';
//url = 'mongodb://jebu:123@localhost:2222/taller_web';
const db = mongoose.connection;

mongoose.connect(process.env.URLDB,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true  
    }
);
 

mongoose.connection.on('open', () => {
    console.log('Conexion establecida', process.env.URLDB);
}).catch(err => console.log(err));

mongoose.connection.on('error', (err) => {
    console.log(err);
})

module.exports = db;