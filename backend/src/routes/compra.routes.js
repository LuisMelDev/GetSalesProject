const { Router } = require("express");
module.exports = function ({ CompraController }) {
    const router = Router();

    router.get("", CompraController.getAll);
    router.get("/search", CompraController.search);
    router.get("/:id", CompraController.get);
    router.get("/:id/proveedor", CompraController.getProveedor);
    router.post("", CompraController.create);
    router.patch("/:id", CompraController.update);
    router.delete("/:id", CompraController.delete);

    return router;
};
