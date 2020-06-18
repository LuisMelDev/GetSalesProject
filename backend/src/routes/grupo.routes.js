const { Router } = require("express");
module.exports = ({ GrupoController }) => {
    const router = Router();

    router.get("", GrupoController.getAll);
    router.get("/search", GrupoController.search);
    router.get("/:id", GrupoController.get);
    router.get("/:id/productos", GrupoController.getProductos);
    router.post("", GrupoController.create);
    router.patch("/:id", GrupoController.update);
    router.delete("/:id", GrupoController.delete);

    return router;
};
