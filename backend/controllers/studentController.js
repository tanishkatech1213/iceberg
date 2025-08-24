const Student = require('../models/Student');
const fs = require('fs-extra');
const path = require('path');

const logPath = path.join(__dirname, '../logs/audit.log');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();

    const logEntry = `[${new Date().toISOString()}] New student: ${student.name}, ${student.year}, ${student.major}\n`;
    await fs.ensureFile(logPath);
    await fs.appendFile(logPath, logEntry);

    res.status(201).json({ message: 'Student saved successfully', student });
  } catch (error) {
    console.error('Error saving student:', error);
    res.status(500).json({ error: 'Failed to save student' });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};
