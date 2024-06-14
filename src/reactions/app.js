const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/reactionsRouter/index_router')

const app = express();
app.use(bodyParser.json());


const server = http.createServer(app);
const PORT = process.env.PORT || 5000;


const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://dev.USER_SECRET:dev.PASSWORD_SECRET@devtaminapi.so4sbfb.mongodb.net/';
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('connected successfully MongoDB');
    })
    .catch((err) => {
        console.error('Error connect MongoDB:', err);
    });

server.listen(PORT, () => {
    console.log(`Server runnig in port ${PORT}`);
});


app.use('/', router());




// mongoose.set('strictQuery', false);
// mongoose.connect('mongodb://127.0.0.1:27017/nodeApi')

//     .then(() => {
//         console.log('successful MongoDB connection');
//         // .- Router
//         app.use('/', routes());

//         // .- Start server
//         app.listen(PORT, () => {
//             console.log(`server running on port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.error('Err conection MongoBD:', error);
//     });

