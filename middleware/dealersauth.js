let jwt = require("jsonwebtoken")
let config = require('config')
module.exports = function (req, res, next) {
    let token = req.header("auth-token")
    if (!token) {
        return res.status(400).json({ msg: "No token has been authirized" })
    }
    try {
        let decoded = jwt.verify(token, config.get("jwtSecret"))
        req.user = decoded.user
        next()
    } catch (error) {
        res.status(400).json({msg: 'token is invalid'})
    }
}