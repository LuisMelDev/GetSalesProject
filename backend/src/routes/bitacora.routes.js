const { Router } = require("express");
module.exports = ({ BitacoraController }) => {
    const router = Router();

    router.get("", BitacoraController.getAll);
    router.post("", BitacoraController.create);

    return router;
};
