const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reactionRoutes = require('./routes/reactionRoutes');

const app = express();

const PORT = process.env.PORT || 5000;

       // .- Objets js and format JSON
app.use(bodyParser.json());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/nodeApi')

    .then(() => {
        console.log('successful MongoDB connection');
        // .- Router
        app.use('/reactions', reactionRoutes);

        // .- Start server
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Err conection MongoBD:', error);
    });

