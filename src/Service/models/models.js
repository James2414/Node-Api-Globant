const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    spaceRol: { type: String, required: true },
    question: { type: String }
},{
    versionKey: false,
});

const serviceRateSchema = new mongoose.Schema({
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' }, // Asocia con la colección 'Service'
    rate: { type: String, required: true },
    comment: { type: String, required: true }
},{
    timestamps: true,
    versionKey: false,
});

const Service = mongoose.model('Service', serviceSchema);
const ServiceRate = mongoose.model('ServiceRate', serviceRateSchema);

module.exports = {
     Service, 
    ServiceRate 
};
