const { Router } = require("express");
module.exports = ({ MarcaController }) => {
    const router = Router();

    router.get("", MarcaController.getAll);
    router.get("/search", MarcaController.search);
    router.get("/:id", MarcaController.get);
    router.get("/:id/productos", MarcaController.getProductos);
    router.post("", MarcaController.create);
    router.patch("/:id", MarcaController.update);
    router.delete("/:id", MarcaController.delete);

    return router;
};
