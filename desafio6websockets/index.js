const express = require('express')

const { Server: HttpServer } = require('http')
const { Server: Socket } = require('socket.io')



const Mensajes = require('./model/modelomensaje')
const mensajes = new Mensajes('mensajes.json')
const Productos = require('./model/modelos')
const producto = new Productos()
console.log(producto)

const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)


//--------------------------------------------
// configuro el socket

io.on('connection', async socket => {
    console.log('Nuevo cliente conectado!');

    // carga inicial de productos
    socket.emit('productos', producto.traeTodo
    ());

    // actualizacion de productos
    socket.on('update', prod => {
        producto.agregaProd(prod)
        io.sockets.emit('productos', producto.traeTodo());
    })

    // carga inicial de mensajes
    socket.emit('mensajes', await mensajes.listarTodo());

    // actualizacion de mensajes
    // socket.on('nuevoMensaje', async msj => {
    //     msj.fyh = new Date().toLocaleString()
    //     await mensaje.guardarMensajes(msj)
    //     io.sockets.emit('mensajes', await mensaje.listarTodo());
    // })
    // actualizacion de mensajes
    socket.on('nuevoMensaje', async msj => {
        msj.fyh = new Date().toLocaleString()
        await mensajes.guardarMensajes(msj)
        io.sockets.emit('mensajes', await mensajes.listarTodo());
    })
});

//--------------------------------------------
// agrego middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//--------------------------------------------
// inicio el servidor

const PORT = 8080
const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error', error => console.log(`Error en servidor ${error}`))
