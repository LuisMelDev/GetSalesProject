const { Router } = require("express");
module.exports = function ({ BitacoraController }) {
    const router = Router();

    router.get("", BitacoraController.getAll);
    router.get("/:ideaId", BitacoraController.get);
    router.post("", BitacoraController.create);
    router.patch("/:ideaId", BitacoraController.update);
    router.delete("/:ideaId", BitacoraController.delete);

    return router;
};
