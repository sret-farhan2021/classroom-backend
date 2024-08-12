const Timetable = require('../models/Timetable');

exports.createTimetable = async (req, res) => {
  const { subject, startTime, endTime, day } = req.body;
  try {
    const timetable = await Timetable.create({ subject, startTime, endTime, day });
    res.status(201).json(timetable);
  } catch (error) {
    res.status(500).json({ error: 'Error creating timetable' });
  }
};

exports.getTimetables = async (req, res) => {
  try {
    const timetables = await Timetable.findAll();
    res.json(timetables);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching timetables' });
  }
};
