const { Router } = require("express");
module.exports = function ({ InventarioController }) {
    const router = Router();

    router.get("", InventarioController.getAll);
    router.get("/:ideaId", InventarioController.get);
    router.post("", InventarioController.create);
    router.patch("/:ideaId", InventarioController.update);
    router.delete("/:ideaId", InventarioController.delete);

    return router;
};
