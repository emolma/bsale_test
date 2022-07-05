const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connect = require('./connection/connection')

const app = express();


//seteo el puerto configurado en las variables de entorno y de lo contrario usa el valor en duro
app.set('port', process.env.port || 8000);

//routes
app.use(require('./routes/index'));


// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//inicialización del servidor
app.listen(app.get('port'), () => {
    console.log(`Server runnning on port ${app.get('port')}` );
});
