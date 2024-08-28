'use client'
import React, { useState } from 'react';
import './donate.css';
import Image from 'next/image';
import qrCodeImage from '../Images/qr code.png'; 
const Donate = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(''); // Track the selected payment method

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (  
    <div className="donation-page">
      {isSubmitted ? (
        <div className="thank-you-message">
          <h1>Thank you for your generosity!</h1>
          <a href="/"><button className='back2home'> Back to Homepage</button></a>
        </div>
      ) : (
        <div>
          <h1>Make a Donation</h1>
          <p>Help us make a difference in the world!</p>
          <form onSubmit={handleSubmit}>
            <label>
              Amount:
              <input type="number" min="1" required />
            </label>
            <br />
            <label>
              Payment Method:
              <select value={paymentMethod} onChange={handlePaymentChange} required>
                <option value="" disabled>Select Payment Method</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="qr-code">Scan QR Code</option>
              </select>
            </label>
            <br />

            {/* Conditionally render Credit Card fields */}
            {paymentMethod === 'credit-card' && (
              <div className="credit-card-details">
                <label>
                  Card Number:
                  <input type="text" pattern="\d{16}" placeholder="Enter 16-digit card number" required />
                </label>
                <br />
                <label>
                  Expiry Date:
                  <input type="month" required />
                </label>
                <br />
                <label>
                  CVV:
                  <input type="text" pattern="\d{3}" placeholder="Enter 3-digit CVV" required />
                </label>
                <br />
              </div>
            )}

            {/* Conditionally render PayPal fields */}
            {paymentMethod === 'paypal' && (
              <div className="paypal-details">
                <label>
                  PayPal Email:
                  <input type="email" placeholder="Enter your PayPal email" required />
                </label>
                <br />
                <label>
                  Confirm PayPal Email:
                  <input type="email" placeholder="Re-enter your PayPal email" required />
                </label>
                <br />
              </div>
            )}

            {/* Conditionally render QR Code */}
            {paymentMethod === 'qr-code' && (
              <div className="qr-code-section">
                <p>Scan the QR Code to make your donation:</p>
                 <Image src={qrCodeImage} alt="QR Code" className="qr-code-image" />
              </div>
            )}

            <button className="donate-btn" type="submit">Donate Now</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Donate;
