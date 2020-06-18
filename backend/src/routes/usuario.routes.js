const { Router } = require("express");
module.exports = ({ UsuarioController }) => {
    const router = Router();

    router.get("", UsuarioController.getAll);
    router.get("/search", UsuarioController.search);
    router.get("/:id", UsuarioController.get);
    router.get("/:id/operaciones", UsuarioController.getOperaciones);
    router.post("", UsuarioController.create);
    router.patch("/:id", UsuarioController.update);
    router.delete("/:id", UsuarioController.delete);

    return router;
};
