const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model { }

Post.init(
    {
       title: DataTypes.STRING,
       body: DataTypes.TEXT
    },
    {
        sequelize
    }
);

module.exports = Post;