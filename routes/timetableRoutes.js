const express = require('express');
const { createTimetable, getTimetables } = require('../controllers/timetableController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createTimetable);
router.get('/', authMiddleware, getTimetables);

module.exports = router;
