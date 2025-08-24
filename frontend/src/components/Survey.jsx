import React, { useEffect, useState } from 'react';
import './Survey.css'; // Add pastel styles here

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastDeleted, setLastDeleted] = useState(null);
  const [showUndo, setShowUndo] = useState(false);
  const [lastDeletedAll, setLastDeletedAll] = useState([]);
  const [showUndoAll, setShowUndoAll] = useState(false);

  const fetchStudents = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/students');
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error('Error fetching students:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    const entry = students.find((s) => s._id === id);
    try {
      await fetch(`http://localhost:5000/api/students/${id}`, { method: 'DELETE' });
      setLastDeleted(entry);
      setShowUndo(true);
      setLastDeletedAll([]);
      setShowUndoAll(false);
      fetchStudents();
    } catch (err) {
      console.error('Error deleting student:', err);
    }
  };

  const deleteAllStudents = async () => {
    try {
      setLastDeletedAll(students);
      await fetch('http://localhost:5000/api/students', { method: 'DELETE' });
      setLastDeleted(null);
      setShowUndo(false);
      setShowUndoAll(true);
      fetchStudents();
    } catch (err) {
      console.error('Error deleting all students:', err);
    }
  };

  const undoDelete = async () => {
    if (!lastDeleted) return;
    try {
      await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lastDeleted),
      });
      setLastDeleted(null);
      setShowUndo(false);
      fetchStudents();
    } catch (err) {
      console.error('Error restoring student:', err);
    }
  };

  const undoDeleteAll = async () => {
    try {
      await Promise.all(
        lastDeletedAll.map(entry =>
          fetch('http://localhost:5000/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entry),
          })
        )
      );
      setLastDeletedAll([]);
      setShowUndoAll(false);
      fetchStudents();
    } catch (err) {
      console.error('Error restoring all students:', err);
    }
  };

  return (
    <div className="table-container">
      <h1>🎓 Student Submissions</h1>
      <button className="delete-all" onClick={deleteAllStudents}>🧹 Delete All</button>
      {loading ? (
        <p className="loading-text">🍭 Loading students...</p>
      ) : students.length === 0 ? (
        <p className="empty-text">No students yet. Let’s get this party started! 🎉</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Major</th>
              <th>Skills</th>
              <th>Interests</th>
              <th>Personality</th>
              <th>Fun Fact</th>
              <th>🗑️</th>
            </tr>
          </thead>
          <tbody>
            {students.map((entry) => (
              <tr key={entry._id}>
                <td>{entry.name || "—"}</td>
                <td>{entry.year || "—"}</td>
                <td>{entry.major || "—"}</td>
                <td>{entry.skills || "—"}</td>
                <td>{entry.interests || "—"}</td>
                <td>{entry.personality || "—"}</td>
                <td>{entry.funFact || "—"}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteStudent(entry._id)}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showUndo && (
        <div className="undo-container">
          <p>🧹 Entry deleted.</p>
          <button className="undo-btn" onClick={undoDelete}>↩️ Undo</button>
        </div>
      )}
      {showUndoAll && (
        <div className="undo-container">
          <p>🧹 All entries deleted.</p>
          <button className="undo-btn" onClick={undoDeleteAll}>↩️ Undo All</button>
        </div>
      )}
    </div>
  );
};

export default StudentTable;
