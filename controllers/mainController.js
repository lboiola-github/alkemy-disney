const db = require('../database/models')
const {Op} = require('sequelize')

const character = {
    main: async (req, res) => {
        const charactersList = await db.Character.findAll()

        res.send(charactersList)
    }
}

module.exports = character;