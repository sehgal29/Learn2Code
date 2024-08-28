'use client'
// import Link from 'next/link';
import React, { useState } from 'react';
import Head from 'next/head';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('/api/sendResetLink', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmail('');
        setMessage(data.message);
        setError('');
      } else {
        setError(data.message);
        setMessage('');
      }
    } catch (err) {
      setError('There was a problem sending the reset link');
      setMessage('');
    }
  };

  return (
    <>
      <Head>
        <title>Forgot Your Password | Learn2Code</title>
        <meta name="description" content="Reset your password on Learn2Code. Enter your email to receive a password reset link." />
      </Head>
      <div className='signUp-Page'>
        <h1>Forgot your password?</h1>
        <form className="form form-forgot" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">What's your email address?</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Reset Link</button>
        </form>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  );
}

export default SignIn;
