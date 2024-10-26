// Task.js
import React, { useState } from 'react';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Tasks</h2>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
        style={{ padding: '10px', fontSize: '16px', marginBottom: '10px', width: '80%' }}
      />
      <button onClick={addTask} style={{ padding: '10px 15px', marginLeft: '5px' }}>Add Task</button>
      <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left', marginTop: '20px' }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              backgroundColor: task.completed ? '#d4edda' : '#f8d7da',
              padding: '10px',
              margin: '5px 0',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span
              onClick={() => toggleTaskCompletion(index)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
