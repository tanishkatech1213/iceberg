const Student = require('../models/Student');
const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, '../logs/audit.log');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();

    const logEntry = `[${new Date().toISOString()}] Created student: ${student.name}, Roll: ${student.rollNumber}\n`;
    fs.appendFileSync(logPath, logEntry);

    res.status(201).json({ message: 'Student created successfully', student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
