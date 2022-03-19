module.exports = (sequelize, DataTypes) => {
    const alias = 'CharacterMovie'

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        character_id: {
            type: DataTypes.INTEGER
        },
        movie_id: {
            type: DataTypes.INTEGER
        }
    }

    const config = {
        tableName: 'character_movie',
        timeStamps: false
    }

    const CharacterMovie = sequelize.define(alias, cols, config)

    CharacterMovie.associate = models => {
        CharacterMovie.belongsTo(models.Character, {
            as: 'characters',
            foreignKey: 'character_id'
        })

        CharacterMovie.belongsTo(models.Movie, {
            as: 'movies',
            foreignKey: 'movie_id'
        })
    }

    return CharacterMovie
}