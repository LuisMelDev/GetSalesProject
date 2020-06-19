"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "proveedores",
            [
                {
                    nombre: "Titanium",
                },
                {
                    nombre: "MetalGear",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("proveedores", null, {});
    },
};
