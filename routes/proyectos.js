// Rutas para crear usuarios
const express = require("express");
const router = express.Router();
const proyectoController = require("../controllers/proyectoController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

// Crea un usuario
//api/usuarios
router.post(
  "/",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoController.crearProyecto
);
router.get("/", auth, proyectoController.obtenerProyectos);
router.put(
  "/:id",
  auth,
  [check("nombre", "El nombre del proyecto es obligatorio").not().isEmpty()],
  proyectoController.actualizarProyecto
);
router.delete("/:id", auth, proyectoController.eliminarProyecto);

module.exports = router;
