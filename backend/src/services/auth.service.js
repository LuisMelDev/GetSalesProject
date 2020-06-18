const { generateToken } = require("../helpers/jwt.helper");
const { ErrorHelper } = require("../helpers");
let _userService = null;

class AuthService {
    constructor({ UsuarioService }) {
        _userService = UsuarioService;
    }

    async signUp(user) {
        const { username } = user;
        const userExist = await _userService.getUserByUsername(username);
        if (userExist) {
            ErrorHelper(400, "El username ya se encuentra en uso.");
        }

        return await _userService.create(user);
    }

    async signIn(user) {
        const { username, password } = user;
        const userExist = await _userService.getByUsername(username);

        if (!userExist) {
            ErrorHelper(404, "El usuario no existe");
        }

        const validPassword = await userExist.comparePassword(password);

        if (!validPassword) {
            ErrorHelper(401, "Contraseña o username invalidos");
        }

        const userToEnconde = {
            username: userExist.username,
            id: userExist.id,
            rol: userExist.rol_id,
        };

        const token = generateToken(userToEnconde);
        delete userExist.password;

        return { token, user: userExist };
    }

    async signOut() {
        // TODO
    }
}

module.exports = AuthService;
