import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>Email: marcoleal21.com</p>
        <p>Phone: 253-678-1983</p>
        <p>Address: Federal Way, WA 98023</p>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
