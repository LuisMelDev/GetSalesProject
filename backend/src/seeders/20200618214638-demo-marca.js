"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "marcas",
            [
                {
                    nombre: "Ultimate",
                },
                {
                    nombre: "Tesla",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("marcas", null, {});
    },
};
