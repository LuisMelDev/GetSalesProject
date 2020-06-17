const container = require("./src/app/container");
const server = container.resolve("app");
const db = require("./src/models");

db.sequelize
    .sync({ force: false })
    .then(() => {
        server.start();
    })
    .catch((err) => {
        console.error(err);
    });
