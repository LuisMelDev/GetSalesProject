const { Router } = require("express");
module.exports = function ({ ProveedorController }) {
    const router = Router();

    router.get("", ProveedorController.getAll);
    router.get("/search", ProveedorController.search);
    router.get("/:id", ProveedorController.get);
    router.get("/:id/compras", ProveedorController.getCompras);
    router.post("", ProveedorController.create);
    router.patch("/:id", ProveedorController.update);
    router.delete("/:id", ProveedorController.delete);

    return router;
};
