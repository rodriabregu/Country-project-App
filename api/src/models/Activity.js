const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', { //Pluraliza
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        difficulty: {
          type: DataTypes.ENUM(['1', '2', '3', '4', '5']),
          allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
          season: {
            type: DataTypes.ENUM(['Summer', 'Fall', 'Winter', 'Spring']),
            allowNull: false,
        },
      });
}