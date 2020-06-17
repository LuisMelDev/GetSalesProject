const { Router } = require("express");
module.exports = function ({ CompraController }) {
    const router = Router();

    router.get("", CompraController.getAll);
    router.get("/:ideaId", CompraController.get);
    router.post("", CompraController.create);
    router.patch("/:ideaId", CompraController.update);
    router.delete("/:ideaId", CompraController.delete);

    return router;
};
