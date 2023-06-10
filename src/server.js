"use strict";

const express = require("express");
const cors = require("cors");
const api = express();
const db = require("./db").connect();

db.then(() => {
  console.log("Banco de dados conectado com sucesso...");
}).catch((error) => {
  console.error(error);
});

api.use(
  cors({
    origin: "*",
  })
);

api.use(express.json());

api.get("/info", (request, response) => {
  response.json({
    nome: "API Contas",
    status: "OK",
  });
});

const contaRoute = require("./routes/ContaRoute");
api.use("/conta", contaRoute);

module.exports = api;