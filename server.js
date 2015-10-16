//server.js

var express     = require('express');  
var app         = express();  
var mongoose     = require('mongoose');

// Conexión con la base de datos
mongoose.connect('mongodb://ds039231.mongolab.com:39231/forindoorusedatabase');

// Configuración
app.configure(function() {  
    // Localización de los ficheros estÃ¡ticos
    app.use(express.static(__dirname + '/main'));
    // Muestra un log de todos los request en la consola        
    app.use(express.logger('dev')); 
    // Permite cambiar el HTML con el método POST                   
    app.use(express.bodyParser());
    // Simula DELETE y PUT                      
    app.use(express.methodOverride());                   
});

var Todo = mongoose.model('Todo', {  
    text: String
});

app.get('*', function(req, res) {  
    res.sendfile('./main/index.html');                
});

// Escucha en el puerto 8080 y corre el server
app.listen(8080, function() {  
    console.log('App listening on port 8080');
});