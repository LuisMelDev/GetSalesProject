const { Router } = require("express");
module.exports = function ({ FacturaController }) {
    const router = Router();

    router.get("", FacturaController.getAll);
    router.get("/:ideaId", FacturaController.get);
    router.post("", FacturaController.create);
    router.patch("/:ideaId", FacturaController.update);
    router.delete("/:ideaId", FacturaController.delete);

    return router;
};
