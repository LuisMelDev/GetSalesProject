const { Router } = require("express");
module.exports = function ({ ClienteController }) {
    const router = Router();

    router.get("", ClienteController.getAll);
    router.get("/:ideaId", ClienteController.get);
    router.post("", ClienteController.create);
    router.patch("/:ideaId", ClienteController.update);
    router.delete("/:ideaId", ClienteController.delete);

    return router;
};
