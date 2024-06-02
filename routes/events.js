/*
    Event Routes
    /api/events
*/

const express = require("express");
const { check } = require("express-validator");
const {
  getEventos,
  actualizarEvento,
  crearEvento,
  eliminarEvento,
} = require("../controllers/events");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = express.Router();

// Todas tienen que pasar por la validacion del token

router.use(validarJWT);

// Obtener eventos
router.get("/", getEventos);

//Crear evento
router.post("/", crearEvento);

//Actualizar evento
router.put("/:id", actualizarEvento);

router.delete("/:id", eliminarEvento);

module.exports = router;
