// App.js
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Task from './components/Task';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
        <h1>Task Manager</h1>
      </header>
      
      <nav style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          padding: '15px 0',
          backgroundColor: '#333',
        }}>
        <a href="#home" style={navLinkStyle}>Home</a>
        <a href="#about" style={navLinkStyle}>About</a>
        <a href="#contact" style={navLinkStyle}>Contact</a>
        <a href="#tasks" style={navLinkStyle}>Tasks</a>
      </nav>
      
      <main style={{ padding: '20px' }}>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="tasks">
          <Task />
        </section>
      </main>
    </div>
  );
}

const navLinkStyle = {
  color: '#61dafb',
  textDecoration: 'none',
  padding: '10px 15px',
  fontSize: '16px',
  transition: 'background 0.3s, color 0.3s',
  borderRadius: '5px',
};

export default App;
