let express = require("express");
let router = express.Router();
let Service = require("../../models/services");
let auth = require("../../middleware/auth");

router.post("/", async (req, res) => {
  let { services, Types, Image, description,About } = req.body;
  try {
    let service = await Service({
      services,
      Types,
      Image,
      description,
      About
    });
    await service.save();
    res.json(service);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("Server Error");
  }
});
router.get("/:id", async (req, res) => {
  try {
    let service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).send("This is not a valid user");
    }
    res.send(service);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("Server Error");
  }
});
router.get("/", async (req, res) => {
  try {
    let profiles = await Service.find();
    res.json(profiles);
  } catch (error) {
    console.log(error.message);
    res.status(400).json("Server Error");
  }
});

module.exports = router;
// router.post(
//   "/register",
//   [
//     check("Emailid", "email is required ").isEmpty(),
//     check("ServiceTypes", "ServiceTypes no is required").isEmpty(),
//     check("MobileNo", "MobileNo no is required").isEmpty(),
//     check("AadharNo", "AadharNo no is required").isEmpty(),
//     check("Address", "Address is required").isEmpty(),
//     check("PermanentAddress", "PermanentAddress is required").isEmpty(),
//     check("Password", "Password is required").not(),
//   ],
//   async (req, res) => {
//     let errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     let {  EmailId,
//       ServiceTypes,
//       MobileNo,
//       AadharNo,
//       Address,
//       PermanentAddress,
//       Password } = req.body;
//     try {
//       console.log(req.body);
//       let user = await Dealer.findOne({ MobileNo });
   
//       if (user) {
//         return res
//           .status(400)
//           .json({ errors: [{ msg: "phone no already exists" }] });
//       } else {
//         let users = new Dealer({
//           EmailId,
//           ServiceTypes,
//           MobileNo,
//           AadharNo,
//           Address,
//           PermanentAddress,
//           Password,
//         });
//         await users.save();

//         let payload = {
//           users: {
//             _id: users._id,
//           },
//         };
//       console.log(users);
//         jwt.sign(
//           payload,
//           config.get("jwtSecret"),
//           { expiresIn: 36000 },
//           (err, token) => {
//             if (err) throw err;
//             res.json({ token });
//           }
//         );
//       }
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).send("Server Error");
//     }
//   }
// );