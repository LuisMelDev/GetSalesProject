"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "productos",
            [
                {
                    nombre: "Battery One",
                    imagen: "someurl.com",
                    amperaje_id: "1",
                    marca_id: "2",
                    grupo_id: "2",
                },
                {
                    nombre: "Battery One",
                    imagen: "someurl.com",
                    amperaje_id: "2",
                    marca_id: "1",
                    grupo_id: "1",
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("productos", null, {});
    },
};
