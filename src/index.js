require('dotenv').config();
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const router = require('./router'); 
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/', router());

//create server HTTP
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://dev.USER_SECRET:dev.PASSWORD_SECRET@devtaminapi.so4sbfb.mongodb.net/';


mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('connected successfully MongoDB');
    })
    .catch((err) => {
        console.error('Err connect Mongo:', err);
    });

server.listen(PORT, () => {
    console.log(`Server runnig in port ${PORT}`);
});






const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');


// .Swagger
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "NodeJs DOC-API-Mongodb",
            version: "1.0.0",
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            },
        ],
    },
    apis: [`${path.join(__dirname, "./router/*.js")}`]
}
const spect = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spect));

// .Middleware

// .-Any request that arrives we will convert into json format


// // .Mongo db connection (local)
// mongoose.set('strictQuery', false);
// mongoose.connect('mongodb://127.0.0.1:27017/nodeApi')

//     .then(() => {
//         console.log('successful MongoDB connection');
//         // .Router
//         app.use('/', router());

//         // Start server
//         app.listen(PORT, () => {
//             console.log(`server running on port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.error('Error al conectar a la base de datos:', error);
//     });

