const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    serviceToRate: { type: mongoose.Schema.Types.ObjectId,
        ref: 'hallId',
        required: true },
    rate: { type: String, required: true },
    comment: { type: String },
});

//terminamso martes aqui
const ServiceRate = mongoose.model('Service', ServiceSchema);