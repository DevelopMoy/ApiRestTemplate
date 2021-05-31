const express = require('express');
const cors = require ('cors');
const usuariosRutas = require('../routes/usuarios.routes');

class Server {

    constructor (port){
        this.app=express();
        this.port=port;
        this.usersEndPoint = "/api/usuarios";

        // MIDDLEWARES, AÑADEN OTRA FUNCIONALIDAD AL WEB SERVER
        this.middlewares();
        // RUTAS DE APP
        this.assignRoutes();
        console.log("APP LISTENING AT PORT "+port);
    }

    middlewares(){ // Middlewares globales
        // CORS
        this.app.use(cors({
            origin: 'https://pruebaapirests.herokuapp.com/'
        }));
        // LECTURA Y PARSEO DEL BODY
        this.app.use(express.json());
        // DIRECTORIO ESTATICO
        this.app.use(express.static('public'));
    }

    assignRoutes (){ // Asigna las rutas de cada endpoint
        this.app.use(this.usersEndPoint,usuariosRutas);
    }

    listen (){
        this.app.listen(this.port);
    }
}

module.exports = Server;