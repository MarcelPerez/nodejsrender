const { verify } = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      verify(token, "secretversatilStoreKey", (err, decoded) => {
        if (err) {
          res.json({
            success: 0,
            message: "Token Invalido!",
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        success: 0,
        message: "Acceso Denegado! Usuario sin acceso!",
      });
    }
  },
};
