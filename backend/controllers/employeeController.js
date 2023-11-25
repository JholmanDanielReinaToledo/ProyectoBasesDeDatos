const Employee = require("../models/employee");
const GenericController = require("./genericController");

const employeeController = new GenericController(Employee);

module.exports = employeeController;
