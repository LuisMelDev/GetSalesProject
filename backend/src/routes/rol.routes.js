const { Router } = require("express");
module.exports = function ({ RolController }) {
    const router = Router();

    router.get("", RolController.getAll);
    router.get("/:ideaId", RolController.get);
    router.post("", RolController.create);
    router.patch("/:ideaId", RolController.update);
    router.delete("/:ideaId", RolController.delete);

    return router;
};
