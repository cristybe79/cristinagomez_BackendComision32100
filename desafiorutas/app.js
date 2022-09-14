const express = require('express')
const app = express();
const productoRouter = require('./routes/producto.router')
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//express.static()
app.use(express.static(`publics`))

//rutes
app.use('/api/productos', productoRouter)


const connectedServer = app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
    console.error('Error: ', error);
})