// Enrutador de Usuarios
const enrutadorUsuarios = express.Router();


// Rutas para Usuarios
enrutadorUsuarios.get("/", controladorUsuarios.obtenerUsuarios)
enrutadorUsuarios.post("/", controladorUsuarios.crearUsuario)


// Enrutador principal 
const enrutadorPrincipal = express.Router()

//Uso del enrutador de Usuarios
enrutadorPrincipal.use("/usuarios", enrutadorUsuarios)

// Enrutador de usuarios.js
const express = require("express")
const router = express.Router()

router.get("/",(req, res)=>{
    res.send("Módulo de Usuarios")
})

module.exports = router

// Enrutador index.js
const express = require("express")
const router2 = express.Router()

const usuariosRouter = require("./usarios")

router2.use("./usuarios", usuariosRouter)

module.exports = router2