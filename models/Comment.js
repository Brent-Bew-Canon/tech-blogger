const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        ccontent: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // primaryKey: true,
            unique: false
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'comment',
    }
);

module.exports = Comment;
