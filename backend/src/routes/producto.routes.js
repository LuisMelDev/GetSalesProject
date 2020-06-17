const { Router } = require("express");
module.exports = function ({ ProductoController }) {
    const router = Router();

    router.get("", ProductoController.getAll);
    router.get("/:ideaId", ProductoController.get);
    router.post("", ProductoController.create);
    router.patch("/:ideaId", ProductoController.update);
    router.delete("/:ideaId", ProductoController.delete);

    return router;
};
