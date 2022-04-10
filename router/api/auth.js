let express = require("express");
let router = express.Router();
const gravator = require("gravator");
let jwt = require("jsonwebtoken");
let config = require("config");
let bcrypt = require("bcryptjs");
let { check, validationResult } = require("express-validator/check");

let auth = require("../../middleware/auth");
let Auth = require("../../models/auth");
let User = require("../../models/User");
router.get("/", auth, async (req, res) => {
  try {
    console.log(req.users);
    let auth = await Auth.findById(req.users._id).select("-password");
    res.json(auth);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("Server Error");
    }
});
router.post("/", [
  check("name", "name is required").not().isEmpty(),
  check("email", "emailid is required").not().isEmpty(),
  check("password", "password is required").isLength({ min: 6 }),
  async (req, res) => {
    let error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    let { name, email, password } = req.body;
    try {
      let user = await Auth.findOne({ email });
      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }

      user = new Auth({
        name,
        email,
        password,
      });
      let salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      // res.send("user registered");
      let payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600000 },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(400).json("Server Error");
    }
  },
]);
module.exports = router;
