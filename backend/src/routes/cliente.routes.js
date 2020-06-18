const { Router } = require("express");
module.exports = function ({ ClienteController }) {
    const router = Router();

    router.get("", ClienteController.getAll);
    router.get("/search", ClienteController.search);
    router.get("/:id", ClienteController.get);
    router.get("/:id/facturas", ClienteController.getFacturas);
    router.post("", ClienteController.create);
    router.patch("/:id", ClienteController.update);
    router.delete("/:id", ClienteController.delete);

    return router;
};
