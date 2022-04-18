let jwt = require("jsonwebtoken");
let config = require("config");
module.exports = function (req, res, next) {
  let token = req.header("x-auth-token");
  if (!token) {
    return res.status(400).json({ msg: "No token has been authorized" });
  }
  try {
    let decoded = jwt.verify(token, config.get("jwtSecret"));
    req.users = decoded.users;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "token is invalid" });
  }
};
