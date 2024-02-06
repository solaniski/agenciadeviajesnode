import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch( error => console.log(error));

// Definir el puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.CurrentYear = year.getFullYear();
    res.locals.nombreSitio = "Travels";
    next();
});

// Agregar body parse para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

// Definir la carpeta pública
app.use(express.static('public'));

// Agregar Router
app.use('/', router);

app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`);
});