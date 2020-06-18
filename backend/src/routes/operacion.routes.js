const { Router } = require("express");
module.exports = ({ OperacionController }) => {
    const router = Router();

    router.get("", OperacionController.getAll);
    router.get("/:id", OperacionController.get);
    router.get("/:id/usuarios", OperacionController.getUsuarios);
    router.post("", OperacionController.create);
    router.patch("/:id", OperacionController.update);
    router.delete("/:id", OperacionController.delete);

    return router;
};
