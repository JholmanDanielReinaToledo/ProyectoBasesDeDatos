const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const employeeRouter = require('./routes/employee.router');
const productRouter = require('./routes/product.router');

const app = express();

connectDB();

app.use(cors())

app.use(express.json());

app.use('/employee', employeeRouter);
app.use('/product', productRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
