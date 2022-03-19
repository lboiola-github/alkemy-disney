module.exports = (sequelize, DataTypes) => {
    const alias = 'Genre'

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
        }
    }

    const config = {
        tableName: 'genres',
        timeStamps: false
    }

    const Genre = sequelize.define(alias, cols, config)

    Genre.associate = models => {
        Genre.hasMany(models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id'
        })

        Genre.hasMany(models.Serie, {
            as: 'series',
            foreignKey: 'genre_id'
        })
    }

    return Genre
}