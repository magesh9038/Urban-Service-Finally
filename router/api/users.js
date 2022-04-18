let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");
let config = require("config");
const nearest_neighbors = require('../../utils/algorithm')
const { check, validationResult } = require("express-validator/check");
let User = require("../../models/User");
let Service = require("../../models/services");
let auth = require("../../middleware/auth");
router.post(
  "/",
  [
    check("email", "email is required ").isEmpty(),
    check("phone", "phone no is required").isEmpty(),
    check("pincode", "pincode is required").isEmpty(),
    check("Password", "Password is required").not(),
  ],
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { EmailId, MobileNo, Pincode, Password } = req.body;
    try {
      console.log(req.body);
      let user = await User.findOne({ MobileNo });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "phone no already exists" }] });
      } else {
        let users = new User({
          EmailId,
          MobileNo,
          Pincode,
          Password,
        });
        await users.save();

        let payload = {
          users: {
            _id: users._id,
            EmailId: users.EmailId,
            MobileNo: users.MobileNo
          },
        };
        console.log(users);
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
router.put("/", auth, async (req, res) => {
  let { EmailId, Location } = req.body;
  try {
    let customers = await User.findOneAndUpdate(
      { $set: { EmailId, Location } },
      { new: true }
    );
    res.json(customers);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error");
  }
});

router.post("/login", async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let { EmailId, Password } = req.body;
  try {
    let Login = await User.findOne({ EmailId }, { Worker: 0 });
    console.log(Login);

    if (Login.Password === req.body.Password) {
      let payload = {
        users: {
          _id: Login._id,
          EmailId: Login.EmailId,
          MobileNo: Login.MobileNo
        },
        Login
      }
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: "Invalid Credentials" }] });
    }
  }
  catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error");
  }
});
router.get('/testing', (req, res) => {

})
router.put(
  "/workers",
  [
    check("Address", "Address isrequired").not().isEmpty(),
    check("ServiceTypes", "ServiceTypes isrequired").not().isEmpty(),
  ],
  async (req, res) => {

    try {
      let worker = validationResult(req);
      if (!worker.isEmpty()) {
        return res.status(400).send({ worker: worker.array() });
      }
      let { Address, ServiceTypes, Status, loc } = req.body;
      const dealer_details =await nearest_neighbors(loc);

      let newWorker = { Address, ServiceTypes, Status, loc, dealer_details };

      let Worker = await User.findOne({ user: req.user });
      Worker.Worker.unshift(newWorker);
      await Worker.save();
      res.send(Worker);
    } catch (error) {
      console.log(error.message);
      res.status(500).json("Server Error");
    }
  }
);
router.delete("/worker/:id", async (req, res) => {
  try {
    let worker = await User.findOne({ user: req.user });
    let removeIndex = worker.Worker;
    worker.Worker.splice(removeIndex, 1);
    await worker.save();
    res.json(worker);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error");
  }
});
router.get("/user/:user_id", auth, async (req, res) => {
  try {
    let worker = await User.findOne({ user: req.params.user_id });
    if (!worker) res.status(400).json({ msg: "There is no user for this id" });
    res.json(worker);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error");
  }
});
router.get("/", auth, async (req, res) => {
  try {
    let profiles = await User.findOne({ user: req.user.id }).populate("auth", [
      "name",
      "avatar",
    ]);
    if (!profiles) {
      return res.status(400).json({ msg: "there is no profile for this user" });
    }
    res.json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post("/list", auth, async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.users._id });
    console.log(req.body);
    user.Worker.push({
      Address: req.body.Address,
      ServiceTypes: req.body.ServiceTypes,
      Status: req.body.Status,
      loc: {
        lat: req.body.loc.lat,
        long: req.body.loc.long
      }
    });
    await user.save();
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
router.post("/post", auth, async (req, res) => {
  try {
    let labour = await User.findOne({ users: req.users._id });
    labour.Worker.unshift({
      Address: req.body.Address,
      ServiceTypes: req.body.ServiceTypes,
    });
    await labour.save();
    res.json(labour.Worker);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.get("/profile", async (req, res) => {
  try {
    let profiles = await User.findOne({ MobileNo: 448944265, workerServiceTypes: "Acting Driver" });
    res.json(profiles);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Server Error");
  }
});
router.get("/me", async (req, res) => {
  try {
    let profiles = await User.find();
    res.json(profiles);
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Server Error");
  }
});

module.exports = router;
