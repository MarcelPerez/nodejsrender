const {
  createUser,
  getUsuarioById,
  getUsuarios,
  updateUsuario,
  deleteUsuario,
  login,
} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUser);
router.get("/", checkToken, getUsuarios);
router.get("/:IdUsuario", checkToken, getUsuarioById);
router.patch("/", checkToken, updateUsuario);
router.delete("/", checkToken, deleteUsuario);
router.post("/login/", login);

module.exports = router;
