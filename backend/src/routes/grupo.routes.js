const { Router } = require("express");
module.exports = function ({ GrupoController }) {
    const router = Router();

    router.get("", GrupoController.getAll);
    router.get("/:ideaId", GrupoController.get);
    router.post("", GrupoController.create);
    router.patch("/:ideaId", GrupoController.update);
    router.delete("/:ideaId", GrupoController.delete);

    return router;
};
