'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import l2c from '../Images/l2c.png';
import './contact.css';
import { useRouter } from 'next/navigation';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Set submitted state to true
    setSubmitted(true);
    // Reset form data
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleBackToHome = () => {
    router.push('/'); // Navigate back to the homepage
  };

  return (
    <div className="contact-container">
      {submitted ? (
        <div className="submission-message">
          <h1>Thank You!</h1>
          <p>Your form has been submitted successfully.</p>
          <button onClick={handleBackToHome} className="back-button">Back to Homepage</button>
        </div>
      ) : (
        <>
          <h1>Contact Us</h1>
          <div className="contact-details">
            <div className="contact-left">
              <div className="contact-item">
                <h2>Get in Touch</h2>
                <p><strong>Email:</strong> <a href="mailto:kartiksehgal292004@gmail.com">kartiksehgal292004@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919996861194">+91 99968 61194</a></p>
                <p><strong>Address:</strong> 3155 Near Bakra Market Kacha Bazar, Ambala, Haryana</p>
              </div>

              <div className="logo">
                <Link href='/'><Image
                  src={l2c}
                  width={500}
                  height={200}
                  alt='logo image' /></Link>
              </div>
            </div>
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactSection;
