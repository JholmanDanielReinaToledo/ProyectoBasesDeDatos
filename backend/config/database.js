const mongoose = require('mongoose');

// URL de conexión a tu base de datos MongoDB
const MONGODB_URI = process.env.DB;

// Configuración y conexión a la base de datos
async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
}


module.exports = connectDB;
