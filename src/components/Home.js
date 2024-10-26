// components/Home.js
import React from 'react';

function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Welcome to the Task Manager</h2>
      <p>Organize your tasks efficiently and stay productive!</p>
      <section style={{ marginTop: '20px', maxWidth: '600px', margin: 'auto' }}>
        <h3>About Capstone Iteration-1</h3>
        <p>
          The Task Manager application is part of our Capstone Iteration-1 project, where we developed a static version of the app using React. 
          This version demonstrates a responsive interface with multiple components for managing tasks. 
          The core features include a task list, navigation bar, and footer, all built with reusable React components.
        </p>
        <p>
          In Iteration-1, the main focus was on creating a clear and intuitive layout, setting up at least five React components, 
          and ensuring the app is responsive across different screen sizes. This foundational iteration set up the base for further enhancements 
          in functionality and design.
        </p>
      </section>
    </div>
  );
}

export default Home;
