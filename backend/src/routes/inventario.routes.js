const { Router } = require("express");
module.exports = function ({ InventarioController }) {
    const router = Router();

    router.get("", InventarioController.getAll);
    router.get("/:producto_id", InventarioController.get);
    // router.post("", InventarioController.create);
    // router.patch("/:producto_id", InventarioController.update);
    // router.delete("/:id", InventarioController.delete);

    return router;
};
