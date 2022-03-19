module.exports = (sequelize, DataTypes) => {
    const alias = 'Movie'

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        },
        release_date: {
            type: DataTypes.DATE
        },
        genre_id: {
            type: DataTypes.INTEGER
        },
        score: {
            type: DataTypes.FLOAT
        }
    }

    const config = {
        tableName: 'movies',
        timeStamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    const Movie = sequelize.define(alias, cols, config)

    Movie.associate = models => {
        Movie.belongsTo(models.Genre, {
            as: 'genres',
            foreignKey: 'genre_id'
        })

        Movie.belongsToMany(models.Character, {
            as: 'characters',
            through: 'character_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id'
        })
    }

    return Movie
}