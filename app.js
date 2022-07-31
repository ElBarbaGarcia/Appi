const express = require("express");
const cors = require("cors");
const middleware = require("./utils/middleware");
const productosController = require("./controller/productos");
const loginController = require("./controller/login");
const usersController = require("./controller/Users");


const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.consoleData);
app.use(middleware.processToken);

app.use("/productos", productosController);
app.use("/login", loginController);
app.use("/users",usersController);

app.use(middleware.unknownEndpoint);
module.exports = app;