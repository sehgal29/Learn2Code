import Image from "next/image";
import l2c from './Images/l2c.png';
import { FaBook, FaHtml5, FaCss3Alt,FaReact,FaNodeJs, FaDatabase, FaGitAlt,FaFigma } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import Link from "next/link";
import { DiJavascript } from "react-icons/di";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
export default function Home() {
  return (
    <>

      <div className="main-section">
        <h1>Your <span>Career in Web Development</span> <br/> Starts Here
        </h1>

<p>Our full stack curriculum is free and supported by a <br/>passionate open source community.</p>      
<Link href='/about'><button className="explore">About US</button></Link>
</div>
{/*  <div className="image-container">
      <Image
        src="https://www.theodinproject.com/assets/home-isometric-68a769acd8c1f2c43991e3d6b24c658bf5e78b59fbca20aba5c7a97850948269.svg"
        alt="The Odin Project"
        layout="responsive"
        width={100}
        height={10}
        className="custom-image"
      />
    </div>*/}
    <div className="image-container">
      <Image
        src={l2c}
        alt="Learn2Code"
        layout="responsive"
        width={50}
        height={10}
        className="custom-image"
      />

      <div className="donate-class">
      <p>
      Our platform is meticulously crafted to cater to individuals at all levels of their web development journey, from beginners to seasoned professionals, offering a comprehensive roadmap with resources such as notes, tutorials, and projects to elevate the learning experience and navigate the intricacies of web development with ease. Additionally, Learn2Code incorporates a specialized tool for tracking progress in Data Structures and Algorithms (DSA), empowering users to systematically monitor and enhance their skills in this pivotal area, ensuring a focused approach to achieving learning objectives and advancing with confidence.</p>
      
      <div className="donate">
      <Link href='/donate'>Donate</Link>
      </div>
      </div>

    </div>

    <div className="how-it-work">
      <h2>How it work</h2>
      <p>This is the website we wish we had when we were learning on our own. We scour the<br/> internet looking for only the best resources to supplement your learning and present them<br/> in a logical order.</p>
      <div className="how-icons">
        <div className="learn"><FaBook size={170} style={{color: '#cc9543'}}/> 
        <h4>Learn</h4>
        <p>Learn from a curriculum with the best<br/> curated online tutorials, blogs, and<br/> courses.</p>
        </div>
        <div className="learn"><FaLaptopCode size={200} style={{color: '#cc9543'}}/> 
        <h4>Build</h4>
        <p>Build dozens of portfolio-worthy <br/>projects along the way, from simple<br/> scripts to full programs and deployed<br/> websites.</p>
        </div>
        <div className="learn"><MdOutlineConnectWithoutContact size={175} style={{color: '#cc9543'}}/> 
        <h4>Connect</h4>
        <p>You're not alone. Learn and get help<br/> from our friendly community of<br/> beginner and experienced developers.</p>
        </div>
      </div>
    </div>
    <div className="skills">
      <h2>Learn everything you need to know</h2>
      <div className="skills-item">
        <div className="skill-list">
          <Link href={'https://en.wikipedia.org/wiki/HTML'}  target='_blank'>
          <FaHtml5 size={220} style={{ color: '#cc9543' }} />
          <h3>HTML</h3></Link>
        </div>
        <div className="skill-list">
        <Link href={'https://en.wikipedia.org/wiki/CSS'}  target='_blank'>
          <FaCss3Alt size={220} style={{ color: '#cc9543' }} />
          <h3>CSS</h3>
          </Link>
        </div>
        <div className="skill-list">
        <Link href={'https://en.wikipedia.org/wiki/JavaScript'} >
          <DiJavascript size={220} style={{ color: '#cc9543' }} />
          <h3>JavaScript</h3>
          </Link>
        </div>
        <div className="skill-list">
        <Link href={'https://en.wikipedia.org/wiki/TypeScript'}  target='_blank'>
          <BiLogoTypescript size={220} style={{ color: '#cc9543' }} />
          <h3>TypeScript</h3>
          </Link>
        </div>
        
        <div className="skill-list">
        <Link href={'https://en.wikipedia.org/wiki/React_(JavaScript_library)'}  target='_blank'>
          <FaReact size={220} style={{ color: '#cc9543' }} />
          <h3>React.Js</h3>
          </Link>
        </div>
        <div className="skill-list">
        <Link href={'https://en.wikipedia.org/wiki/Node.js'} target='_blank'>
          <FaNodeJs size={220} style={{ color: '#cc9543' }} />
          <h3>Node.Js</h3>
          </Link>
        </div>
        <div className="skill-list">
        <Link href={'https://en.wikipedia.org/wiki/Express.js'} target='_blank'>
          <SiExpress size={220} style={{ color: '#cc9543' }} />
          <h3>Express.Js</h3>
          </Link>
        </div>
        <div className="skill-list">
        <Link href={'https://en.wikipedia.org/wiki/Database'} target='_blank'>
          <FaDatabase size={220} style={{ color: '#cc9543' }} />
          <h3>Databases</h3>
          </Link>
        </div>        
        <div className="skill-list">
        <Link href={'https://en.wikipedia.org/wiki/GitHub'} target='_blank'>
          <FaGitAlt size={220} style={{ color: '#cc9543' }} />
          <h3>GitHub</h3>
          </Link>
        </div>        
        <div className="skill-list">
        <Link  href={'https://en.wikipedia.org/wiki/Figma_(software)'} target='_blank'>
          <FaFigma size={220} style={{ color: '#cc9543' }} />
          <h3>Figma</h3>
          </Link>
        </div>
      </div>
<Link href='/courses'><button className="explore skill-btn">View Courses</button></Link>

    </div>
    </>
  );
}
