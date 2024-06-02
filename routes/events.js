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
const { isDate } = require("../helpers/isDate");

const router = express.Router();

// Todas tienen que pasar por la validacion del token

router.use(validarJWT);

// Obtener eventos
router.get("/", getEventos);

//Crear evento
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

//Actualizar evento
router.put(
  "/:id",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
    validarCampos,
  ],
  actualizarEvento
);

router.delete("/:id", [], eliminarEvento);

module.exports = router;
