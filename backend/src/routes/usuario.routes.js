const { Router } = require("express");
module.exports = function ({ UsuarioController }) {
    const router = Router();

    router.get("", UsuarioController.getAll);
    router.get("/:ideaId", UsuarioController.get);
    router.post("", UsuarioController.create);
    router.patch("/:ideaId", UsuarioController.update);
    router.delete("/:ideaId", UsuarioController.delete);

    return router;
};
