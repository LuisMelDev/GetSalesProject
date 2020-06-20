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
                    nombre: "Metal Gear",
                },

                {
                    nombre: "Hattori Hanzo",
                },
                {
                    nombre: "Lewis C.A.",
                },
                {
                    nombre: "Electroniks",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("proveedores", null, {});
    },
};
