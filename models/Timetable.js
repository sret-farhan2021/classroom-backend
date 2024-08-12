const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Timetable = sequelize.define('Timetable', {
  subject: {
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
  day: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Timetable;
