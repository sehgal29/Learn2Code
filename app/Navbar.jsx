'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation'; // Import usePathname
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname(); // Use usePathname to get the current route

  useEffect(() => {
    // Load theme from localStorage if available
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply the theme class to the body
    if (darkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='navbar'>
      <div className="logo">
        <Link href={'/'}>&lt;/ Learn2Code &gt;</Link>
      </div>
      <div className="nav-items">
        <ul>
          <li className={pathname === '/' ? 'active' : ''}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname === '/about' ? 'active' : ''}>
            <Link href="/about">About</Link>
          </li>
          <li className={pathname === '/courses' ? 'active' : ''}>
            <Link href="/courses">Courses</Link>
          </li>
          <li className={pathname === '/team' ? 'active' : ''}>
            <Link href="/team">Team</Link>
          </li>
          <li className={pathname === '/dsa-tracker' ? 'active' : ''}>
            <Link href="/dsa-tracker">
              DSA Tracker
              <span className="new-label">New 🚀</span>
            </Link>
          </li>
          <li className={pathname === '/contact-us' ? 'active' : ''}>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="started">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
        </button>
        <button className="getStarted">
          <Link href="/signIn">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
