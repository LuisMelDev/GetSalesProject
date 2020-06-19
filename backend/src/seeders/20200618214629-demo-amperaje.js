"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "amperajes",
            [
                {
                    amp: "10",
                },
                {
                    amp: "150",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("amperajes", null, {});
    },
};
