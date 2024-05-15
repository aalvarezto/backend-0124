"use strict";

const path = require("path");
const express = require("express");
const app = express();
const PORT = 8080;

app.get(
  "/alumno", // Esto sería la acción.

  (req, res) => {
    console.log(req.url);
    // res.send({ success: true }); // forma antigua

    res.status(200).json({ success: true }); // este llamado finaliza la instrucción.
  } // Esto sería la instrucción.
);

app.get("/nota", (req, res) => {
  const filePath = path.resolve("public", "index.html");

  res.status(200).sendFile(filePath);
});

app.post(
  "/alumno", // Esto sería la acción.

  () => {
    console.log("se ejecutó el endpoint /alumno");
  } // Esto sería la instrucción.
);

app.listen(PORT, () => console.log(`¡Escuchando en el puerto ${PORT}!`));
