const { Router } = require("express");
module.exports = function ({ FacturaController }) {
    const router = Router();

    router.get("", FacturaController.getAll);
    router.get("/search", FacturaController.search);
    router.get("/:id", FacturaController.get);
    router.get("/:id/cliente", FacturaController.getCliente);
    router.post("", FacturaController.create);
    router.patch("/:id", FacturaController.update);
    router.delete("/:id", FacturaController.delete);

    return router;
};
