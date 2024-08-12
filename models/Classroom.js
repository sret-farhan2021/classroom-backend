const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Classroom = sequelize.define('Classroom', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  days: {
    type: DataTypes.STRING, // e.g., 'Monday, Tuesday'
    allowNull: false
  }
});

module.exports = Classroom;
