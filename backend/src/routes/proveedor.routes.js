const { Router } = require("express");
module.exports = function ({ ProveedorController }) {
    const router = Router();

    router.get("", ProveedorController.getAll);
    router.get("/:ideaId", ProveedorController.get);
    router.post("", ProveedorController.create);
    router.patch("/:ideaId", ProveedorController.update);
    router.delete("/:ideaId", ProveedorController.delete);

    return router;
};
