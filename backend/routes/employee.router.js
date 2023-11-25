const express = require('express');
const employeeRouter = express.Router();
const employeeController = require("../controllers/employeeController");

employeeRouter.get('/', employeeController.getAll);
employeeRouter.get('/:id', employeeController.getById);
employeeRouter.post('/', employeeController.create);
employeeRouter.put('/:id', employeeController.update);
employeeRouter.delete('/:id', employeeController.delete);

module.exports = employeeRouter;
