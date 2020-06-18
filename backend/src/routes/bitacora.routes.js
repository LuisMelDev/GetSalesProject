const { Router } = require("express");
module.exports = function ({ BitacoraController }) {
    const router = Router();

    router.get("", BitacoraController.getAll);
    router.post("", BitacoraController.create);
    // router.get("/:id", BitacoraController.get);
    // router.patch("/:id", BitacoraController.update);
    // router.delete("/:id", BitacoraController.delete);

    return router;
};
