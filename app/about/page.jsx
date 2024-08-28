import React from 'react';
import Image from 'next/image';
import './about.css';
import { MdMenuBook, MdOutlineReduceCapacity } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaGlobe, FaCode } from "react-icons/fa6";
const page = () => {
  return (
    <div className='about-section'>
      <div className="about-part">
      <h2>About the Learn2Code</h2>
      {/* <Image src= "/l2c.png"
      height={150}
      width={170}
      alt='logo'
      /> */}
      </div>
      <p>The Learn@Code is one of those "What I wish I had when I was learning" resources. Not everyone has<br/> access to a computer science education or the funds to attend an intensive coding school and neither of<br/> those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to<br/> hack it on their own but still want a high quality education.</p>

      <div className="about-intro">
      <p>What you can expect at Learn2Code</p>
      <div className="about-intro-parts">
        <div className='about-icons'><MdMenuBook/></div>
        <div className="parts-detail">
            <h4>A full roadmap to becoming a developer</h4>
            <p>Our free, comprehensive curriculum will equip you to be a full stack developer, no matter your current experience level.</p>
        </div>
      </div>
      <div className="about-intro-parts">
        <div className='about-icons'><FaCode/></div>
        <div className="parts-detail">
            <h4>Learn by doing</h4>
            <p>The most effective learning happens while building projects, so we have strategically placed them throughout our curriculum. These projects will make a strong portfolio for you to showcase on your resume.</p>
        </div>
      </div>
      <div className="about-intro-parts">
        <div className='about-icons'><MdOutlineReduceCapacity/></div>
        <div className="parts-detail">
            <h4>Receive support from others</h4>
            <p>The maintainers of the curriculum run a Discord community, with the help of countless other volunteers, where you can receive help with anything in our curriculum.</p>
        </div>
      </div>
      <div className="about-intro-parts">
        <div className='about-icons'><FaGlobe/></div>
        <div className="parts-detail">
            <h4>Open source and community driven</h4>
            <p>You can deepen your understanding and improve your GitHub skills by contributing to our open source curriculum and helping others in our Discord community.</p>
        </div>
      </div>
      </div>  
      <div className="over"> 
  <div className="overview">
    <h4>Overview of Learn2Code</h4>
    <div className="overview-grid">
      <div className="overview-parts"><span>100+</span><br/>Learners</div>
      <div className="overview-parts"><span>50+</span><br/>Contributors</div>
      <div className="overview-parts"><span>2024</span><br/>Founded</div>
      <div className="overview-parts span-two-columns">
        <h3>Origin of The Learn2Code</h3>
    <div className="paragraph-overview-parts">
   
Learn2Code offers a comprehensive and free open-source coding curriculum available entirely online. Since its inception, the platform has empowered numerous students to secure developer positions and has enabled many others to acquire the programming skills necessary for their personal projects.</div>

Our platform is meticulously designed to support individuals at every stage of their web development journey—from novices to experienced professionals. It features a well-structured roadmap enriched with resources such as notes, tutorials, and projects, all aimed at enhancing your learning experience and navigating the complexities of web development.

<mark>Additionally, Learn2Code includes a specialized tool for tracking progress in Data Structures and Algorithms (DSA).</mark> This feature enables users to monitor and refine their skills in this critical area, ensuring you remain focused on your learning objectives and advance with assurance. 
      </div>
      <div class="overview-parts fifth-one">
        <div className='fifth-sub-parts'>
        <a href="https://github.com/sehgal29" target='_blank'><FaGithub size={32}/></a>
          <h4>Open Source</h4>
          <p>This website and the curriculum it hosts are completely open source. That means anyone can work on new features or fix existing bugs on the website. This also extends to the curriculum itself, anyone can work on new lessons, add new resources and improve existing lessons.</p>
          <p>The Learn2Code would not be possible without the hard work of contributors from all across the world. If you're interested in helping us make The Learn2Code better, please find out how to contribute.</p>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default page
