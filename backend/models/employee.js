const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    // Puedes añadir validaciones adicionales para el formato de la imagen si es necesario
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    // Puedes añadir validaciones para el formato del correo electrónico
  },
  direccion: {
    type: String,
  },
  cargo: {
    type: String,
  },
  salario: {
    type: Number,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;