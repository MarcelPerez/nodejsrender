const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "INSERT INTO Usuario(Nombre1, Nombre2, Apellido1, Apellido2, sexo, " +
        "telefono, cedula, habilitado, username, password) " +
        "values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        data.nombre1,
        data.nombre2,
        data.apellido1,
        data.apellido2,
        data.sexo,
        data.telefono,
        data.cedula,
        data.habilitado,
        data.username,
        data.password,
      ],
      (error, results, field) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsuarios: (callBack) => {
    pool.query("Select * from Usuario", [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getUsuarioById: (IdUsuario, callBack) => {
    pool.query(
      "Select * from Usuario where IdUsuario = ?",
      [IdUsuario],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUsuario: (data, callBack) => {
    pool.query(
      "UPDATE Usuario SET nombre1=?, nombre2=?, apellido1=?, apellido2=?, sexo=?, telefono=?, cedula=?, habilitado=?, username=?, password=? where IdUsuario=?;",
      [
        data.nombre1,
        data.nombre2,
        data.apellido1,
        data.apellido2,
        data.sexo,
        data.telefono,
        data.cedula,
        data.habilitado,
        data.username,
        data.password,
        data.IdUsuario,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Error al intentar actualizar el usuario!",
          });
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUsuario: (data, callBack) => {
    pool.query(
      "delete from Usuario where IdUsuario = ?",
      [data.IdUsuario],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsuarioByUsername: (username, callBack) => {
    pool.query(
      "Select * from Usuario where username = ?",
      [username],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
