const express = require('express')
const path = require('path')
const {engine} = require('express-handlebars')
const app = express();
const rutas = require('./routes/rutas');



const PORT = process.env.PORT || 8080;


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//express.static()
app.use(express.static(`publics`))


app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname,'./views/layouts/index.hbs'),
    layoutsDir: path.join(__dirname, './views/layouts'),
    partialsDir: path.join(__dirname,'./views/partials')
}))

app.set('views', path.join(__dirname,'./views'))
app.set('view engine', 'hbs')

//rutes
app.use('/',rutas)


const connectedServer = app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
    console.error('Error: ', error);
})