module.exports = (sequelize, DataTypes) => {
    const alias = 'CharacterSerie'

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        character_id: {
            type: DataTypes.INTEGER
        },
        serie_id: {
            type: DataTypes.INTEGER
        }
    }

    const config = {
        tableName: 'character_serie',
        timeStamps: false
    }

    const CharacterSerie = sequelize.define(alias, cols, config)

    CharacterSerie.associate = models => {
        CharacterSerie.belongsTo(models.Character, {
            as: 'characters',
            foreignKey: 'character_id'
        })

        CharacterSerie.belongsTo(models.Serie, {
            as: 'series',
            foreignKey: 'serie_id'
        })
    }

    return CharacterSerie
}