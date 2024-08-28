import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import l2c from './Images/l2c.png'
import { FaGithub, FaDiscord, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (<>
    <div className="footer-section">
      <div className="pro-1">
      <div className="logo footer-logo">
        <div className="footer-flex-image">
        <Link href='/'>&lt;/ Learn2Code &gt;</Link>
       <Link href='/'> <Image
      src={l2c}
      width={200}
      height={50}
      alt="Picture of the author"
    /></Link>
        </div>
      </div>
      <p>High quality coding education maintained by an open<br />source community.</p>
      <div className="footer-icons">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons github-icon">
          <FaGithub />
        </a>
        <a href="mailto:someone@example.com" className="footer-social-icons mail-icon">
          <IoIosMail />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons discord-icon">
          <FaDiscord />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons facebook-icon">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons twitter-icon">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icons instagram-icon">
          <FaInstagram />
        </a>
      </div>
      </div> 
      <div className="pro-2">
        <div className="footer-list">
          <ul>
            <li  className='headline'>About Us</li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/team'}>Team</Link></li>
            <li><Link href={'/'}>Blog</Link></li>
            <li><Link href={'/'}>Success Stories</Link></li>
          </ul>
        </div>
        <div className="footer-list">
          <ul>
            <li className='headline'>Support</li>
            <li><Link href={'/'}>FAQ</Link></li>
            <li><Link href={'/'}>Contribte</Link></li>
            <li><Link href={'/contact-us'}>Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-list">
          <ul>
            <li  className='headline'>Guides</li>
            <li><Link href={'/'}>Community guides</Link></li>
            <li><Link href={'/'}>Installation guides</Link></li>
          </ul>
        </div>
        <div className="footer-list">
          <ul>
            <li  className='headline'>Legal</li>
            <li><Link href={'/'}>Terms</Link></li>
            <li><Link href={'/'}>Privacy</Link></li>
          </ul>
        </div>
      </div>
    </div>
      <p className="footer-line"></p>
      <p className='reserved'>© 2024 The Learn2Code. All rights reserved.</p>

      </>
  );
}

export default Footer;
