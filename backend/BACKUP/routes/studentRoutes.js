const express = require('express');
const router = express.Router();
const { createStudent, getStudents } = require('../controllers/studentController');

router.post('/students', createStudent);
router.get('/students', getStudents);

module.exports = router;
