const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const { Service , ServiceRate} = require('../Service/models/models'); // Verifica la ruta
const { getServices } = require('../Service/models/models');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
const MONGO_URL = 'mongodb+srv://admin:admin@devtaminapi.so4sbfb.mongodb.net/serviceDB?retryWrites=true&w=majority&appName=DevtaminAPI';

mongoose.connect(MONGO_URL,{
     useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Conectado exitosamente a MongoDB');
    })
    .catch((err) => {
        console.error('Error conectando a MongoDB:', err);
    });

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

// Ruta POST para crear un servicio
app.post('/api/services', async (req, res) => {
    try {
        const { spaceRol, question } = req.body;
        
        const service = new Service({ spaceRol, question });
        const savedService = await service.save(); 
        res.status(201).send({ message: 'Servicio creado exitosamente', service: savedService });
    } catch (err) {
        console.error('Error al crear el servicio:', err);
        res.status(500).send({ message: 'Error creando servicio' });
    }
});
// Ruta GET para obtener todos los servicios
app.get('/api/services', async (req, res) => {
    try {
        const services = await Service.find(); // Usamos find() para obtener todos los servicios
        res.status(200).send(services);
    } catch (err) {
        console.error('Error al obtener los servicios:', err);
        res.status(500).send({ message: 'Error obteniendo servicios' });
    }
});


// Ruta POST para crear un servicio calificado
app.post('/api/serviceRate', async (req, res) => {
    try {
        const { serviceId, rate, comment } = req.body;

        // Verificar si el `serviceId` existe en `services`
        const serviceExists = await Service.exists({ _id: serviceId });
        if (!serviceExists) {
            return res.status(400).send({ message: 'serviceId no válido, el servicio no existe' });
        }

        const serviceRate = new ServiceRate({ serviceId, rate, comment });
        const savedServiceRate = await serviceRate.save(); // Usamos await para esperar a que se guarde
        res.status(201).send({ message: 'Calificación de servicio creada exitosamente', serviceRate: savedServiceRate });
    } catch (err) {
        console.error('Error al crear la calificación del servicio:', err);
        res.status(500).send({ message: 'Error creando calificación del servicio' });
    }
});

app.get('')