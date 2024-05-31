/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const express = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidadToken,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const router = express.Router();

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  crearUsuario
);

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUsuario
);

router.get("/renew", revalidadToken);

module.exports = router;