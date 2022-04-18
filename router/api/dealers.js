let express = require("express");
let router = express.Router();
const gravator = require("gravator");
let jwt = require("jsonwebtoken");
let config = require("config");
let bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
let auth = require("../../middleware/auth");
let Dealer = require("../../models/Dealers");
router.post(
  "/register",
  // [
  //   check("Name", "Name is required ").isEmpty(),
  //   check("EmailId", "EmailId is required ").isEmpty(),
  //   check("MobileNo", "MobileNo no is required").isEmpty(),
  //   check("Address", "Address is required").not(),
  //   check("Password", "Password is required").not(),
  //   check("ServiceTypes", "ServiceTypes is required ").isEmpty(),
  //   check("PermanentAddress", "PermanentAddress is required ").isEmpty(),
  //   check("AadharNo", "AadharNo is required").not().isLength({ min: 16 }),
  // ],
  async (req, res) => {

    try {
      console.log(req.body);
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let { Name, EmailId, MobileNo, Password, ServiceTypes, PermanentAddress, Address, AadharNo, Location, Password2 } = req.body;
      // let { Name, EmailId, MobileNo, Password, ServiceTypes, PermanentAddress, Address, AadharNo, Location } = req.body;

      let user = await Dealer.findOne({ MobileNo, AadharNo });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "phone no already exists" }] });
      } else {
        let users = new Dealer({
          Name, EmailId, MobileNo, Password, ServiceTypes, PermanentAddress, Address, AadharNo, Location,Password2
          // Name, EmailId, MobileNo, Password, ServiceTypes, PermanentAddress, Address, AadharNo, Location
        });
        await users.save();

        let payload = {
          users: {
            _id: users._id,
            MobileNo: users.MobileNo,
            AadharNo: users.AadharNo,
            EmailId: users.EmailId,
            Location: users.Location
          },
        };
        console.log("tetst", users);
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 36000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

router.post("/login", async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let { Password, EmailId } = req.body;
  try {
    let Login = await Dealer.findOne({ EmailId });
    if (!Login) {
      // res.status(500).json({ msg: "EmailId already registered" });
    }
    console.log(Login);
    let payload = {
      users: {
        id: Login.id,
        MobileNo: Login.MobileNo,
        ServiceTypes: Login.ServiceTypes
      },
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 36000 },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error");
  }
});
router.put("/updateLocation", auth, async (req, res) => {
  try {
    console.log(req.users);
    let Dealers = await Dealer.findOne({ MobileNo: req.users.MobileNo });
    Dealers.loc = {
      lat: req.body.lat,
      long: req.body.long
    }
 
    await Dealers.save();
    res.json(Dealers)
  } catch (error) {
    console.log(error.message)
    res.status(500).json(error.message)
  }
})

router.get("/", async (req, res) => {
  try {
    let Dealers = await Dealer.findOne({ MobileNo: req.user.MobileNo })
    res.json(Dealers)
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error")
  }
  
  router.get("/alldetails", async (req,res) => {
    try {
      let Dealers =  await Dealer.find();
      res.json(Dealers)
    } catch (error) {
      console.log(error.message);
      res.status(400).send("Server Error")
    }
  })
  
})
module.exports = router;