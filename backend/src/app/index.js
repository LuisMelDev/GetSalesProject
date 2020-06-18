const express = require("express");

let _express = null;
let _config = null;

class server {
    constructor({ router, config }) {
        _config = config;
        _express = express().use(router);
    }
    start() {
        return _express.listen(_config.APP_PORT, () => {
            console.log("API RUNNING on PORT " + _config.APP_PORT);
        });
    }
}

module.exports = server;
