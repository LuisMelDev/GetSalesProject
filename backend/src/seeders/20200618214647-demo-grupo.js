"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "grupos",
            [
                {
                    nombre: "Daily",
                },
                {
                    nombre: "Group two",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("grupos", null, {});
    },
};
