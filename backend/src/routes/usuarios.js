const express = require("express");
const {login} = require("../controllers/UsuariosController")
const usuarios = express.Router();

usuarios.post('/', login);
//usuarios.post('/register', register);

module.exports = {
    usuarios
}