let jwt = require("jsonwebtoken");
let config = require("config");
module.exports = function (req, res, next) {
  let token = req.header("x-auth-token");
  if (!token) {
    return res.status(400).json({ msg: "No token has been authorized" });
  }
  try {
    console.log(token);
    let decoded = jwt.verify(token, config.get("jwtSecret"));
<<<<<<< HEAD
    console.log(decoded);
    req.users = decoded.users;
=======
    req.users = decoded.Login;
>>>>>>> 5af97a8aa4304747d2ea6108a17ca0a9aa89a034
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "token is invalid" });
  }
};
