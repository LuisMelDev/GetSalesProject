const { Router } = require("express");
module.exports = function ({ OperacionController }) {
    const router = Router();

    router.get("", OperacionController.getAll);
    router.get("/:ideaId", OperacionController.get);
    router.post("", OperacionController.create);
    router.patch("/:ideaId", OperacionController.update);
    router.delete("/:ideaId", OperacionController.delete);

    return router;
};
