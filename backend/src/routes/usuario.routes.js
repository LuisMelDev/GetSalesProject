const { Router } = require("express");
const { AuthMiddleWare } = require("../middlewares");

module.exports = ({ UsuarioController }) => {
    const router = Router();

    router.get("", AuthMiddleWare, UsuarioController.getAll);
    router.get("/search", AuthMiddleWare, UsuarioController.search);
    router.get("/:id", AuthMiddleWare, UsuarioController.get);
    router.get("/:id/operaciones", AuthMiddleWare, UsuarioController.getOperaciones);
    router.post("", AuthMiddleWare, UsuarioController.create);
    router.patch("/:id", AuthMiddleWare, UsuarioController.update);
    router.delete("/:id", AuthMiddleWare, UsuarioController.delete);

    return router;
};
