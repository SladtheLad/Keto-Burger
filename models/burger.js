/* Inside burger.js, import orm.js into burger.js

Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

Export at the end of the burger.js file. */

const orm = require('../config/orm.js');

module.exports = {
    selectAllBurgers: async function() {
        const burgers = await orm.selectAll();

        return {
            notEaten: burgers.filter(burger => !burger.devoured),
            eaten: burgers.filter(burger => burger.devoured)
        };
    },

    insertNewBurger: async function(name) {
        return await orm.insertOne(name);
    },

    devourBurger: async function(id) {
        return await orm.updateOne(id);
    }
}
