// newyork vs Losangelesskparrks

// if(Newyork === ' va con todo'){
//     console.log('es significa que habran un menos de 162'){
//         if(newyork === 'no va con todo'){
//             console.log('la probabilidad de que halla baja 162 muy probable');

//         }if (newyork === " va por delante") {
//             console.log('la probabilidad de que haya menos 162 muy viable ')
            
//         } else if(Losangelesskparrks=== "va con todo"){
//             console.log('la probabilidad de que haya un 162 es bien')
//                 if(Losangelesskparrks === 'no va con todo'){
//                     console.log('la probabilidad de que haya menos 162 es muy viable')
//                 }if(Losangelesskparrks === 'va por delate'){
//                     confirm('La probabilidad de que haya menos 162 es muy viable')
//                 }
//             }if(newyork || Losangelesskparrks === ' van con todo'){
//                 console.log('la probabilidad de que haya un 162 es buena')
//             }if(newyork || Losangelesskparrks === ' no van con todo'){
//                 console.log('la probabilidad de que haya un menos 162 bien')
//             }
//         }
//     }




// Claro! Para crear una base de datos en MongoDB con colecciones y documentos en Node.js, necesitarás instalar el paquete mongoose que es una biblioteca de modelado de objetos para MongoDB.

// Primero, crea un archivo models.js con el siguiente código:

// javascript

// Open In Editor
// Edit
// Run
// Copy code
// const mongoose = require('mongoose');

// const serviceSchema = new mongoose.Schema({
//   name: String,
//   description: String
// });

// const serviceToRateSchema = new mongoose.Schema({
//   serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
//   rating: Number,
//   comment: String
// });

// const Service = mongoose.model('Service', serviceSchema);
// const ServiceToRate = mongoose.model('ServiceToRate', serviceToRateSchema);

// module.exports = { Service, ServiceToRate };
// Este archivo define dos esquemas de documentos: Service y ServiceToRate. El esquema Service tiene dos campos: name y description, mientras que el esquema ServiceToRate tiene tres campos: serviceId que hace referencia al documento Service, rating y comment.

// Luego, crea un archivo app.js con el siguiente código:

// javascript

// Open In Editor
// Edit
// Run
// Copy code
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const { Service, ServiceToRate } = require('./models');

// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// app.use(express.json());

// app.post('/services', async (req, res) => {
//   try {
//     const service = new Service(req.body);
//     const save = await service.save();
//     return res.status(201).json({ service: save });
//   } catch (error) {
//     console.log('Error', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.post('/service-to-rate', async (req, res) => {
//   try {
//     const serviceToRate = new ServiceToRate(req.body);
//     const save = await serviceToRate.save();
//     return res.status(201).json({ serviceToRate: save });
//   } catch (error) {
//     console.log('Error', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });
// Este archivo crea una aplicación Express.js que se conecta a la base de datos MongoDB y define dos rutas: /services para crear un nuevo documento Service y /service-to-rate para crear un nuevo documento ServiceToRate.

// Para crear una interfaz de usuario en React, puedes crear un archivo ServiceForm.js con el siguiente código:

// jsx

// Open In Editor
// Edit
// Copy code
// import React, { useState } from 'react';

// const ServiceForm = () => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('/services', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, description })
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log('Error', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Nombre:
//         <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
//       </label>
//       <br />
//       <label>
//         Descripción:
//         <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Crear servicio</button>
//     </form>
//   );
// };

// export default ServiceForm;
// Este archivo crea un formulario que permite al usuario ingresar el nombre y la descripción de un servicio y envía una solicitud POST a la ruta /services para crear un nuevo documento Service.

// Para crear una interfaz de usuario para crear un nuevo documento ServiceToRate, puedes crear un archivo ServiceToRateForm.js con el siguiente código:

// jsx

// Open In Editor
// Edit
// Copy code
// import React, { useState } from 'react';

// const ServiceToRateForm = () => {
//   const [serviceId, setServiceId] = useState('');
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('/service-to-rate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ serviceId, rating, comment })
//       });
     



// Answer with Web Search
// Continue

// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true }); sn esta linea donde dice mydatabase que nombre iria?


// Excelente pregunta!

// En la línea mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });, el parámetro mydatabase se refiere al nombre de la base de datos que deseas crear o conectar en MongoDB.

// En este caso, puedes reemplazar mydatabase con el nombre que desees para tu base de datos. Por ejemplo, si estás creando una aplicación de servicios y ratings, podrías llamarla servicesDB o ratingAppDB.

// Así que, si quieres llamarla reactDB, la línea quedaría así:

// javascript

// Open In Editor
// Edit
// Run
// Copy code
// mongoose.connect('mongodb://localhost:27017/reactDB', { useNewUrlParser: true, useUnifiedTopology: true });
// Recuerda que, si la base de datos no existe, MongoDB la creará automáticamente cuando se conecte por primera vez.

// Por otro lado, si ya tienes una base de datos existente en MongoDB y deseas conectar a ella, simplemente reemplaza mydatabase con el nombre de la base de datos existente.

// Es importante mencionar que, en un entorno de producción, es recomendable utilizar variables de entorno o archivos de configuración para almacenar la cadena de conexión a la base de datos, en lugar de hardcodearla en el código. Esto te permite mantener la seguridad y flexibilidad en tu aplicación.




// Answer with Web Search
// Continue
