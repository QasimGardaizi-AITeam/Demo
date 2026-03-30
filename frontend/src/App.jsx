import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>My Tasks</h1>
        <p>A simple to-do list app</p>
      </header>
      <section className="input-section">
        <form className="input-group" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      </section>
      <section className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            {task}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;