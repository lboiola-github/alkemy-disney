module.exports = (sequelize, DataTypes) => {
    const alias = 'Serie';

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
        tableName: 'series',
        timeStamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    const Serie = sequelize.define(alias, cols, config)

    Serie.associate = models => {
        Serie.belongsTo(models.Genre, {
            as: 'genres',
            foreignKey: 'genre_id'
        })

        Serie.belongsToMany(models.Character, {
            as: 'characters',
            through: 'character_serie',
            foreignKey: 'serie_id',
            otherKey: 'character_id'
        })
    }

    return Serie
}