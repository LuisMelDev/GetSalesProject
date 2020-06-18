const { Router } = require("express");
module.exports = ({ AmperajeController }) => {
    const router = Router();

    router.get("", AmperajeController.getAll);
    router.get("/search", AmperajeController.search);
    router.get("/:id", AmperajeController.get);
    router.get("/:id/productos", AmperajeController.getProductos);
    router.post("", AmperajeController.create);
    router.patch("/:id", AmperajeController.update);
    router.delete("/:id", AmperajeController.delete);

    return router;
};
