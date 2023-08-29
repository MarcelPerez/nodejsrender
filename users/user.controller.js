const {
  create,
  getUsuarioById,
  getUsuarios,
  updateUsuario,
  deleteUsuario,
  getUsuarioByUsername,
} = require("./user.service");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10);
    // body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Error de conexion con BD.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
        message: "Usuario Agregado Correctamente!",
      });
    });
  },
  getUsuarioById: (req, res) => {
    const IdUsuario = req.params.IdUsuario;
    getUsuarioById(IdUsuario, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Usuario no encontrado.",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getUsuarios: (req, res) => {
    getUsuarios((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Usuario no encontrado.",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateUsuario: (req, res) => {
    const body = req.body;
    // const salt = genSaltSync(10);
    // body.password = hashSync(body.password, salt);
    updateUsuario(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Usuario Actualizado Correctamente!",
      });
    });
  },
  deleteUsuario: (req, res) => {
    const data = req.body;
    deleteUsuario(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Usuario no encontrado!",
        });
      }
      return res.json({
        success: 1,
        message: "Usuario Eliminado Correctamente!",
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    getUsuarioByUsername(body.username, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "username o password incorrectos",
        });
      }

      // console.log(results);
      // const result = compareSync(body.password, results.password);
      // console.log(result);

      if (results.password == body.password) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "secretversatilStoreKey", {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "Login Exitoso!",
          token: jsontoken,
        });
      } else {
        return res.json({
          succes: 0,
          message: "Usernamee o Password invalidos!",
        });
      }
    });
  },
};
