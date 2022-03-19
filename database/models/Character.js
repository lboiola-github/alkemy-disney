const dataTypes = require("sequelize/lib/data-types")

module.exports = (sequelize, DataTypes) => {
    const alias = 'Character'

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        weight: {
            type: DataTypes.FLOAT
        },
        story: {
            type: DataTypes.STRING
        }
    }

    const config = {
        tableName: 'characters',
        timeStamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    const Character = sequelize.define(alias, cols, config)

    Character.associate = models => {
        Character.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'character_movie',
            foreignKey: 'character_id',
            otherKey: 'movie_id'
        })

        Character.belongsToMany(models.Serie, {
            as: 'series',
            through: 'character_serie',
            foreignKey: 'character_id',
            otherKey: 'serie_id'
        })
    }

    return Character
}