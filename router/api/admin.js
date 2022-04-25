let User = require("../../models/User");
let Dealers= require('../../models/Dealers')
const express = require('express');
let router = express.Router();


router.get('/', async (req, res) => {
    const user = await Dealers.find();
    res.status(200).json(user);
});

module.exports = router;