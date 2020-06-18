const { Router } = require("express");
module.exports = function ({ RolController }) {
    const router = Router();

    router.get("", RolController.getAll);
    router.get("/search", RolController.search);
    router.get("/:id", RolController.get);
    router.get("/:id/usuarios", RolController.getUsuarios);
    router.post("", RolController.create);
    router.patch("/:id", RolController.update);
    router.delete("/:id", RolController.delete);

    return router;
};
