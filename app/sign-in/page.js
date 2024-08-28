'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub,FaGoogle } from "react-icons/fa";
import Head from 'next/head';
const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [rememberMe, setRememberMe] = useState(false); 
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialChar
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!validatePassword(password)) {
      alert(
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      );
      return;
    }
    // Handle form submission, e.g., send the data to a backend server
    console.log('Form submitted:', { username, email, password });
    // Clear the form and error after successful submission
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };
  const handleGitHubLogin = () => {
    window.location.href = 'https://github.com/login';
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://accounts.google.com/signin';
  };

  return (
    <>
    <Head>
        <title>Sign In | Learn2Code</title>
        <meta name="description" content="Sign up for a free account on Your Website. Create a new account to access exclusive features and content." />
      </Head>
    <div className='signUp-Page'>
      <h1>Sign in to your account</h1>
      <p>or <Link href="/signIn">sign up for a new account</Link></p>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address:</label>
          <br/>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br/>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="remember-forgot">
         <p> <Link href="/forgot-password">Forgot password?</Link></p>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
          
        <button type="submit">Sign Up</button>
        <p className='continue'>or continue with</p>
      <div className="social-login">
        <button onClick={handleGitHubLogin} className="github-button">
        <FaGithub size={20}/>
        </button>
        <button onClick={handleGoogleLogin} className="google-button">
          <FaGoogle size={20}/>
        </button>
      </div>
      </form>
    </div>
    </>
  );
}

export default SignIn;
