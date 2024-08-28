// // 'use client';
// import React, { useState } from 'react';
// import dsaTopics from '../data/page';
// import { IoCheckmarkCircleOutline, IoBookmarkOutline } from "react-icons/io5";
// import './dsa-tracker.css';

// const Page = () => {
//   const [completed, setCompleted] = useState({});
//   const [activeTopic, setActiveTopic] = useState(null);

//   // Calculate total questions and completed questions
//   const totalQuestions = dsaTopics.flatMap(topic => topic.questions).length;
//   const completedQuestions = Object.values(completed).flatMap(topic => Object.values(topic)).filter(Boolean).length;
  
//   // Calculate progress percentage
//   const progressPercentage = Math.min((completedQuestions / totalQuestions) * 100, 100);

//   const toggleCompletion = (topic, question) => {
//     setCompleted(prevState => ({
//       ...prevState,
//       [topic]: {
//         ...prevState[topic],
//         [question]: !prevState[topic]?.[question],
//       },
//     }));
//   };

//   const handleTopicClick = (topic) => {
//     setActiveTopic(prevTopic => (prevTopic === topic ? null : topic));
//   };

//   return (
//     <div className="tracker-container">
//       <h1>DSA 450 Tracker</h1>
//       <div className="loader-container">
//         <div className="loader-bar" style={{ width: `${progressPercentage}%` }}></div>
//         <div className="loader-text">{Math.round(progressPercentage)}% Complete</div>
//       </div>
//       {dsaTopics.map((topic) => (
//         <div key={topic.topic} className="topic-section">
//           <div className="topic-header" onClick={() => handleTopicClick(topic.topic)}>
//             <h2>{topic.topic}</h2>
//             <span className="question-count">{topic.questions.length} Questions</span>
//           </div>
//           {activeTopic === topic.topic && (
//             <ul>
//               {topic.questions.map((question) => (
//                 <li key={question} className="question-item">
//                   <span className="question-text">{question}</span>
//                   <button
//                     className="completion-button"
//                     onClick={() => toggleCompletion(topic.topic, question)}
//                   >
//                     {completed[topic.topic]?.[question] ? (
//                       <IoCheckmarkCircleOutline className="completed-icon" />
//                     ) : (
//                       <IoBookmarkOutline className="incomplete-icon" />
//                     )}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Page;

'use client';
import React, { useState } from 'react';
import dsaTopics from '../data/page'; // Ensure this path is correct
import { IoCheckmarkCircleOutline, IoBookmarkOutline } from "react-icons/io5";
import './dsa-tracker.css';

const Page = () => {
  const [completed, setCompleted] = useState({});
  const [activeTopic, setActiveTopic] = useState(null);

  // Calculate total questions and completed questions
  const totalQuestions = dsaTopics.flatMap(topic => topic.questions).length;
  const completedQuestions = Object.values(completed).flatMap(topic => Object.values(topic)).filter(Boolean).length;
  
  // Calculate progress percentage
  const progressPercentage = Math.min((completedQuestions / totalQuestions) * 100, 100);

  const toggleCompletion = (topic, question) => {
    setCompleted(prevState => ({
      ...prevState,
      [topic]: {
        ...prevState[topic],
        [question]: !prevState[topic]?.[question],
      },
    }));
  };

  const handleTopicClick = (topic) => {
    setActiveTopic(prevTopic => (prevTopic === topic ? null : topic));
  };

  return (
    <div className="tracker-container">
      <h1>DSA 450 Tracker</h1>
      <div className="loader-container">
        <div className="loader-bar" style={{ width: `${progressPercentage}%` }}></div>
        <div className="loader-text">{Math.round(progressPercentage)}% Complete</div>
      </div>
      {dsaTopics.map((topic) => (
        <div key={topic.topic} className="topic-section">
          <div
            className="topic-header"
            onClick={() => handleTopicClick(topic.topic)}
            role="button"
            aria-expanded={activeTopic === topic.topic}
            aria-controls={`questions-${topic.topic}`}
          >
            <h2>{topic.topic}</h2>
            <span className="question-count">{topic.questions.length} Questions</span>
          </div>
          {activeTopic === topic.topic && (
            <ul id={`questions-${topic.topic}`}>
              {topic.questions.map((question) => (
                <li key={question} className="question-item">
                  <span className="question-text">{question}</span>
                  <button
                    className="completion-button"
                    onClick={() => toggleCompletion(topic.topic, question)}
                    aria-label={completed[topic.topic]?.[question] ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {completed[topic.topic]?.[question] ? (
                      <IoCheckmarkCircleOutline className="completed-icon" />
                    ) : (
                      <IoBookmarkOutline className="incomplete-icon" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
