// components/Contact.js
import React from 'react';

function Contact() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Contact</h2>
      <p>If you have any questions or feedback about our Task Manager project, feel free to reach out!</p>
      
      <section style={{ marginTop: '20px', maxWidth: '600px', margin: 'auto' }}>
        <h3>Contact Ravneet Singh</h3>
        <p>
          For more information or specific inquiries related to the project, you can get in touch with our team member, Ravneet Singh.
          Ravneet is actively involved in the development and can provide insights into project details, implementation, and future iterations.
        </p>
        <p>
          <strong>Email:</strong> ravneet.singh@example.com
        </p>
        <p>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ravneetsingh" style={{ color: '#61dafb' }}>Ravneet Singh</a>
        </p>
      </section>
    </div>
  );
}

export default Contact;
