const db = require("../data/db-config.js");

function getRecipes(){
    return db('recipes')
}

module.exports = {
    getRecipes,
}