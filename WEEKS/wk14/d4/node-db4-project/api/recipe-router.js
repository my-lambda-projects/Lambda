const express = require('express');
const Helper = require("./recipe-model.js");

const router = express.Router();

router.get("/", (_,res) => {
    Helper.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(error => {
        error.status(500).json({ message: error.message })
    })
})

module.exports = router;