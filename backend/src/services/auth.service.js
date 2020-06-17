const { generateToken } = require('../helpers/jwt.helper')
const { UsuarioService } = require('./index')
const { ErrorHelper } = require('../helpers')

class AuthService{
    constructor(UserService){
        this.UserService = UserService
    }

    async signIn(user){
        const {username, password} = user
        const userExist = await this.UserService.getUserByUsername(username)

        if(!userExist){
            ErrorHelper(404, "El usuario no existe")
        }

        const validPassword = await userExist.validPassword(password)

        if(!validPassword){
            ErrorHelper(400, "contraseña o username invalidos")
        }

        const userToEnconde = {
            username: userExist.username,
            id: userExist.id,
        }

        const token = generateToken(userToEnconde)

        return {token, user: userExist}
    }

}

module.exports = new AuthService(UsuarioService)