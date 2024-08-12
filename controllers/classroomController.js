const Classroom = require('../models/Classroom');

exports.createClassroom = async (req, res) => {
  const { name, startTime, endTime, days } = req.body;
  try {
    const classroom = await Classroom.create({ name, startTime, endTime, days });
    res.status(201).json(classroom);
  } catch (error) {
    res.status(500).json({ error: 'Error creating classroom' });
  }
};

exports.getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.findAll();
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching classrooms' });
  }
};
