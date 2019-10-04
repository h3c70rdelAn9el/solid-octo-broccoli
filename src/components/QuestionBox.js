// import React, { useState } from 'react';

// const QuestionBox = ({ question, options, selected }) => {
//   const [answer, setAnswer] = useState(options);

//   return (
//     <div className="questionBox">
//     <p>Question Box</p>
//       {/* <div className="question">Question goes here{question}</div>
//       {answer.map((text, index) => (
//         <button 
//           key={index}
//           className="answerBtn"
//           onClick={() => {
//             setAnswer([text])
//             selected(text);
//           }}
//         >
//           {text}
//         </button>
//       ))}
//        */}
//     </div>
//   );
// };

// export default QuestionBox;

import React, { useState } from 'react';

import './QuestionBox.css';

const QuestionBox = ({ question, options, selected }) => {

  const [answer, setAnswer] = useState(options);

  return (
    <div className="question-box">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button key={index} className="answer-btn" onClick={() => {
          setAnswer([text]);
          selected(text);
        }}>
          {text}
        </button>
      ) 
      )}
        
    </div>
  );
};

export default QuestionBox;