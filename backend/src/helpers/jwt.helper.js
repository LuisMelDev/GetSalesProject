const { sign } = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/configApp')

module.exports.generateToken = function(user){
    return sign({user},JWT_SECRET,{ expiresIn: "2h" })
}
