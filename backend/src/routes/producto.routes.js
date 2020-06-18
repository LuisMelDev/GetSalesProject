const { Router } = require("express");
module.exports = function ({ ProductoController }) {
    const router = Router();

    router.get("", ProductoController.getAll);
    router.get("/search", ProductoController.search);
    router.get("/:id", ProductoController.get);
    router.post("", ProductoController.create);
    router.patch("/:id", ProductoController.update);
    router.delete("/:id", ProductoController.delete);

    return router;
};
