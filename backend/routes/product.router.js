const express = require('express');
const productController = require('../controllers/productController');
const productRouter = express.Router();

productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getById);
productRouter.post('/', productController.create);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.delete);

module.exports = productRouter;
