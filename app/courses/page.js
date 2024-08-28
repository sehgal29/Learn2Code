// 'use client'
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaFigma } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import Link from "next/link";
import { DiJavascript } from "react-icons/di";
import './course.css';

const page = () => {
    return (
        <div>
            <div className="project-section">
                <Link href={'https://en.wikipedia.org/wiki/HTML'} target='_blank'>
                    <div className="icon">
                        <FaHtml5 size={220} style={{ color: '#cc9543' }} />
                    </div>
                </Link>
                <div className="description">
                    <h3>HTML</h3>
                    <p>HTML is the standard markup language for creating web pages. It is used to structure a web page and its content. HTML elements form the building blocks of all websites. Learning HTML is the first step towards becoming a web developer.</p>
                    <div className="course-btn">
    <Link href={"https://youtu.be/G3e-cpL7ofc?si=pJMLXQ_j0F6uyvWD"} target='_blank'>
            <button className='project-btn'>View Tutorial</button>
          </Link>
          <Link href={"https://youtu.be/np3L1lb-Uvs?si=8R3b8jTXVZoLPNoA"} target='_blank'>
            <button className='project-btn'>Show Projects</button>
          </Link>
    </div>
                </div>
            </div>
            <div className="project-section">
                <Link href={'https://en.wikipedia.org/wiki/CSS'} target='_blank'>
                    <div className="icon">
                        <FaCss3Alt size={220} style={{ color: '#cc9543' }} />
                    </div>
                </Link>
                <div className="description">
                    <h3>CSS</h3>
                    <p>CSS is used to style and layout web pages. It allows you to change the color, font, and spacing of your content, split it into multiple columns, or add animations and other decorative features.</p>
                    <div className="course-btn">
    <Link href={"https://youtu.be/ieTHC78giGQ?si=ZMf7Ufpcb_L2bHvx"} target='_blank'>
            <button className='project-btn'>View Tutorial</button>
          </Link>
          <Link href={"https://youtu.be/np3L1lb-Uvs?si=zksgELi-PZOiwloC"} target='_blank'>
            <button className='project-btn'>Show Projects</button>
          </Link>
    </div>
                </div>
            </div>
            <div className="project-section">
                <Link href={'https://en.wikipedia.org/wiki/JavaScript'} target='_blank'>
                    <div className="icon">
                        <DiJavascript size={220} style={{ color: '#cc9543' }} />
                    </div>
                </Link>
                <div className="description">
                    <h3>JavaScript</h3>
                    <p>JavaScript is a programming language for the web. It is used to create interactive effects within web browsers. JavaScript is essential for creating dynamic web pages and is a core technology alongside HTML and CSS.</p>
                    <div className="course-btn">
    <Link href={"https://youtu.be/Jo9yksmQRrk?si=UV_3aY5mLmBLnB_Q"} target='_blank'>
            <button className='project-btn'>View Tutorial</button>
          </Link>
          <Link href={"https://youtu.be/MIYQR-Ybrn4?si=PEvjNBekHSOE1KMQ"} target='_blank'>
            <button className='project-btn'>Show Projects</button>
          </Link>
    </div>
                </div>
            </div>
            <div className="project-section">
                <Link href={'https://en.wikipedia.org/wiki/TypeScript'} target='_blank'>
                    <div className="icon">
                        <BiLogoTypescript size={220} style={{ color: '#cc9543' }} />
                    </div>
                </Link>
                <div className="description">
                    <h3>TypeScript</h3>
                    <p>TypeScript is a superset of JavaScript that adds static types. It is designed for the development of large applications and transcompiles to JavaScript. TypeScript improves development efficiency and code quality.</p>
                    <div className="course-btn">
    <Link href={"https://youtu.be/d56mG7DezGs?si=oGlzjdKAaVWwXc01"} target='_blank'>
            <button className='project-btn'>View Tutorial</button>
          </Link>
          <Link href={"https://youtu.be/F2JCjVSZlG0?si=0z7X5jszJUHgIF62"} target='_blank'>
            <button className='project-btn'>Show Projects</button>
          </Link>
    </div>
                </div>
            </div>
            <div className="project-section">
                <Link href={'https://en.wikipedia.org/wiki/React_(JavaScript_library)'} target='_blank'>
                    <div className="icon">
                        <FaReact size={220} style={{ color: '#cc9543' }} />
                    </div>
                </Link>
                <div className="description">
                    <h3>React.Js</h3>
                    <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
                    <div className="course-btn">
    <Link href={"https://youtu.be/-mJFZp84TIY?si=-B2mZw8-pT_9f8e2"} target='_blank'>
            <button className='project-btn'>View Tutorial</button>
          </Link>
          <Link href={"https://youtu.be/0yboGn8errU?si=RL-Ae_QVNyWLoRBR"} target='_blank'>
            <button className='project-btn'>Show Projects</button>
          </Link>
    </div>
                </div>
            </div>
            <div className="project-section">
                <Link href={'https://en.wikipedia.org/wiki/Node.js'} target='_blank'>
                    <div className="icon">
                        <FaNodeJs size={220} style={{ color: '#cc9543' }} />
                    </div>
                </Link>
                <div className="description">
                    <h3>Node.Js</h3>
                    <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to build scalable network applications. Node.js is commonly used for back-end services and APIs.</p>
                    <div className="course-btn">
    <Link href={"https://youtu.be/T55Kb8rrH1g?si=6Ck5EqiCt52sbMfH"} target='_blank'>
            <button className='project-btn'>View Tutorial</button>
          </Link>
          <Link href={"https://youtu.be/-foo92lFIto?si=2gGrrurW6fssIxdj"} target='_blank'>
            <button className='project-btn'>Show Projects</button>
          </Link>
    </div>
                </div>
            </div>
            <div className="project-section">
                <Link href={'https://en.wikipedia.org/wiki/Express.js'} target='_blank'>
                    <div className="icon">
                        <SiExpress size={220} style={{ color: '#cc9543' }} />
                    </div>
                </Link>
                <div className="description">
                    <h3>Express.Js</h3>
                    <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It facilitates the rapid development of Node.js applications.</p>
                    <div className="course-btn">
    <Link href={"https://youtu.be/T55Kb8rrH1g?si=6Ck5EqiCt52sbMfH"} target='_blank'>
            <button className='project-btn'>View Tutorial</button>
          </Link>
          <Link href={"https://youtu.be/-foo92lFIto?si=2gGrrurW6fssIxdj"} target='_blank'>
            <button className='project-btn'>Show Projects</button>
          </Link>
    </div>
                </div>
            </div>
            <div className="project-section">
                <Link href={'https://en.wikipedia.org/wiki/Database'} target='_blank'>
                    <div className="icon">
                        <FaDatabase size={220} style={{ color: '#cc9543' }} />
                    </div>
                </Link>
                <div className="description">
                    <h3>Databases</h3>
                    <p>Databases are used to store and retrieve data. They are essential for dynamic websites and applications. Common databases include SQL databases like MySQL and PostgreSQL, and NoSQL databases like MongoDB.</p>
                    <div className="course-btn">
    <Link href={"https://youtu.be/ExcRbA7fy_A?si=YVhlqoj_8c7h8j_f"} target='_blank'>
            <button className='project-btn'>View Tutorial</button>
          </Link>
          <Link href={"https://youtu.be/zQAdZYxbH14?si=xmzv6wsUuAOMZS5-"} target='_blank'>
            <button className='project-btn'>Show Projects</button>
          </Link>
    </div>
                </div>
            </div>
            <div className="project-section">
                <Link href={'https://en.wikipedia.org/wiki/GitHub'} target='_blank'>
                    <div className="icon">
                        <FaGitAlt size={220} style={{ color: '#cc9543' }} />
                    </div>
                </Link>
                <div className="description">
                    <h3>GitHub</h3>
                    <p>GitHub is a platform for version control and collaboration. It allows you to work on projects with others from anywhere. It provides all the distributed version control and source code management functionality of Git.</p>
                    <div className="course-btn">
    <Link href={"https://youtu.be/Ez8F0nW6S-w?si=ZwViixBhgIplLSfp"} target='_blank'>
            <button className='project-btn'>View Tutorial</button>
          </Link>
          <Link href={"https://youtu.be/4eMnz8VbgyM?si=Q82D8TbHQ-fa6KG-"} target='_blank'>
            <button className='project-btn'>Show Projects</button>
          </Link>
    </div>
                </div>
            </div>
            <div className="project-section">
                <Link href={'https://en.wikipedia.org/wiki/Figma_(software)'} target='_blank'>
                    <div className="icon">
                        <FaFigma size={220} style={{ color: '#cc9543' }} />
                    </div>
                </Link>
                <div className="description">
                    <h3>Figma</h3>
                    <p>Figma is a collaborative interface design tool. It is primarily web-based, with additional offline features enabled by desktop applications. It allows for real-time collaboration and is used for UI/UX design.</p>
                    <div className="course-btn">
                        <Link href={"https://youtu.be/FxZFKSgpeBc?si=rQrHCN7_bM_0blBN"} target='_blank'>
                            <button className='project-btn'>View Tutorial</button>
                        </Link>
                        <Link href={"https://youtu.be/Jo9yksmQRrk?si=xTRvkh2SgA6dH_4I"} target='_blank'>
                            <button className='project-btn'>Show Projects</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
