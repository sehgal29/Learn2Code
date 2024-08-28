import Head from 'next/head';
import Image from 'next/image';
import myimage from '../Images/myphoto02.jpg';
import './team.css'; // Import the CSS file directly

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About Kartik</title>
                <meta name="description" content="Learn more about Kartik." />
            </Head>
            <div className="aboutContainer">
                <h1>About Me</h1>
                <div className="profile">
                    <Image
                        src={myimage} // Ensure this image is in the public directory
                        alt="Kartik's Profile Picture"
                        width={350}
                        height={350}
                        className="profileImage"
                    />
                    <div className="profileDetails">
                        <h2>Kartik</h2>
                        <h3> Founder of Learn2Code</h3>
                        <p className='role'>Role: Developer</p>
                        <p><div className='team-para'>I am currently in my final year of studies and am a dedicated software engineer with a strong focus on front-end development. As a passionate learner, I am deeply engaged in exploring Next.js to further enhance my skills in building responsive and dynamic web applications. My journey in software engineering has been characterized by a commitment to continuous learning and adaptability to new technologies.</div>

                            <div className='team-para'>I am enthusiastic about creating innovative solutions and have a keen interest in developing user-friendly interfaces that provide exceptional user experiences. I value collaboration and thrive in dynamic team environments where I can contribute my technical expertise and creative problem-solving skills.</div>
                            <div className='team-para'>
                            My goal is to remain at the forefront of industry trends and advancements while continually growing as a developer. With a solid foundation in front-end technologies and a drive for excellence, I aim to make meaningful contributions to impactful projects and to further my career in software engineering.
                            </div>

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
