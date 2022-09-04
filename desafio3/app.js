const express = require('express')
const Contenedor = require('./index.js');
const PORT = process.env.PORT || 8080;
const app = express();

const productos = new Contenedor('productos.txt')

async function objetos(req,res) {
    const respuesta = await productos.getAll();
    res.send(respuesta)
}

async function productoRandom(req, res) {
    const respuesta = await productos.getAll();
    const randomIndice = Math.floor(Math.random() * respuesta.length)
    res.send(respuesta[randomIndice])
}

app.get('/', (req, res) => {
    res.send('Esta es la pagina inicio :)')
})

app.get('/productos', objetos)
app.get('/productoRandom',productoRandom)


const connectedServer = app.listen(PORT, () => {
    console.log(`server en funcionamiento puerto ${PORT}`)
})

connectedServer.on('error', (error) => {
    console.log(error.message)
})