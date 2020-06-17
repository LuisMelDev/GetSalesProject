const express = require("express");

let _express = null;
let _config = null;

class server {
    constructor({ router, config }) {
        _config = config;
        _express = express().use(router);
    }
    start() {
        return new Promise((resolve) => {
            _express.listen(_config.APP_PORT, () => {
                console.log(
                    _config.APPLICATION_NAME +
                        "API RUNNING on PORT " +
                        _config.APP_PORT
                );
            });
        });
    }
}

module.exports = server;

// const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");
// const helmet = require("helmet");
// const compression = require("compression");
// require("express-async-errors");

// const app = express();

// //middlewares
// const { ErrorMiddleware, NotFoundMidlleware } = require("../middlewares");

// // importar rutas
// const routes = require("../routes");

// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());
// app.use(helmet());
// app.use(compression());

// app.use("/api", routes);

// app.use(NotFoundMidlleware);
// app.use(ErrorMiddleware);

// module.exports = app;
