const {Router}=require('express');
const routes = Router();
const usuariosController = require('../controllers/usuarios.controller');

// RUTAS DEL ENDPOINT USUARIOS

routes.get('/',usuariosController.usuariosGet);
routes.post('/',usuariosController.usuariosPost);
routes.put('/:id',usuariosController.usuariosPut);
routes.delete('/',usuariosController.usuariosDelete);

module.exports = routes;