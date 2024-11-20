const { DataTypes } = require('sequelize');
const { sequelize } = require('./connection');

const Posts = sequelize.define('Post', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { tableName: 'posts' });

module.exports = {
  Posts
};
