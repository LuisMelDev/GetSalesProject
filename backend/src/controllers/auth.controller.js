let _authService = null;
let _bitacoraService = null;

class AuthController {
    constructor({ AuthService, BitacoraService }) {
        _authService = AuthService;
        _bitacoraService = BitacoraService;
    }

    async signUp(req, res, next) {
        const { body } = req;
        try {
            const createdUser = await _authService.signUp(body);
            return res.status(201).send(createdUser);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    async signIn(req, res, next) {
        const { body } = req;
        try {
            const creds = await _authService.signIn(body);
            // await _bitacoraService.register("LOGIN", " ", creds.user.id);
            return res.send(creds);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    async signOut(req, res) {}
}

module.exports = AuthController;
