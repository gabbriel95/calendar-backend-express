const { response } = require("express");
const bcrypt = require("bcryptjs");
const Evento = require("../models/Evento");

const getEventos = (req, res = response) => {
  res.json({
    ok: true,
    msg: "getEventos",
  });
};

const crearEvento = (req, res = response) => {
  //Verificar que tenga el evento

  res.json({
    ok: true,
    msg: "crear evento",
  });
};

const actualizarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "actualizar evento",
  });
};

const eliminarEvento = (req, res = response) => {
  res.json({
    ok: true,
    msg: "eliminar evento",
  });
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
