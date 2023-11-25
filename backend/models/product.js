const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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
  categoria: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
  },
  modelo: {
    type: String,
    required: true,
  },
  serie: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  fabricante: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;