const express = require('express')
const path = require('path')
const app = express();
const rutas = require('./routes/rutas');



const PORT = process.env.PORT || 8080;


app.use(express.json())
app.use(express.urlencoded({ extended: true }));






app.set('views', path.join(__dirname,'./views'))
app.set('view engine', 'pug')

//rutes
app.use('/',rutas)


const connectedServer = app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
    console.error('Error: ', error);
})