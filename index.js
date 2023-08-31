const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        mensaje: '!Bienvenido a nuestra API¡'
    })
})

app.post("/usuarios", (req, res) => {
    const { nombre, email } = req.body;

    if (!nombre || !email) return res.status(400).json({ error: 'Faltan datos' });

    // TODO: Procesamiento de datos.

    res.json({ mensaje: 'Usuario creado exitosamente', usuario: { nombre, email } });
})

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto", PORT)
})



