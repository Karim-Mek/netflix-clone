export default function Accordion({
  question,
  answer,
  onOpen,
  onClose,
  isOpen,
}) {
  function toggleAccordion() {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
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
