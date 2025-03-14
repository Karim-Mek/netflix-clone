import React, { useEffect, useState } from "react";

export default function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   // const button = document.querySelector(".question-card .question button");
  //   // const buttonAfter = document.querySelector(
  //   //   ".question-card .question button::after"
  //   // );
  //   // console.log(button);
  //   // console.log(buttonAfter);
  // }, [isOpen]);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <li className="accordion-item">
      <div className="question-card">
        <h3 className="question">
          <button
            data-text={isOpen ? "Close" : "Open"}
            onClick={toggleAccordion}
          >
            <span>{question}</span>
            <i
              className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-plus"}
            ></i>
          </button>
        </h3>
      </div>

      <div className={isOpen ? "answer-card open" : "answer-card"}>
        <div className="answers-container">
          {answer.map((a) => (
            <>
              <p className="small-text">{a}</p>
              <br />
            </>
          ))}
        </div>
      </div>
    </li>
  );
}
