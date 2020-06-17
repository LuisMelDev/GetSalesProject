const { Router } = require("express");
module.exports = function ({ AmperajeController }) {
    const router = Router();

    router.get("", AmperajeController.getAll);
    router.get("/:ideaId", AmperajeController.get);
    router.post("", AmperajeController.create);
    router.patch("/:ideaId", AmperajeController.update);
    router.delete("/:ideaId", AmperajeController.delete);

    return router;
};
