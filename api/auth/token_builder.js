const jwt = require("jsonwebtoken")
const { jwtSecret } = require("./secret")

module.exports = function(user){
    const payload = {sub: user.user_id, username: user.username}
    const options = {expiresIn: "1d"}
    return jwt.sign(payload, jwtSecret, options)
}

