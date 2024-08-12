const express = require('express');
const { createClassroom, getClassrooms } = require('../controllers/classroomController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createClassroom);
router.get('/', authMiddleware, getClassrooms);

module.exports = router;
