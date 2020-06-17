const { Router } = require("express");
module.exports = function ({ MarcaController }) {
    const router = Router();

    router.get("", MarcaController.getAll);
    router.get("/:ideaId", MarcaController.get);
    router.post("", MarcaController.create);
    router.patch("/:ideaId", MarcaController.update);
    router.delete("/:ideaId", MarcaController.delete);

    return router;
};
