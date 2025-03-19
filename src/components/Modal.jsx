import { useEffect, useState } from "react";
// import { CSSTransition } from "react-transition-group";

export default function Modal({ isOpen, onClose, children }) {
  const [show, setShow] = useState(false);
  const [classes, setClasses] = useState("");

  useEffect(() => {
    setShow(isOpen);

    setClasses(show ? "modal-content fade-in" : "modal-content fade-out");
  }, [isOpen, show]);

  function handleClose() {
    console.log("Closing");

    setShow(false);

    setTimeout(onClose, 100);
  }

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{ visibility: isOpen ? "visible" : "hidden" }}
      onClick={handleClose}
    >
      <div className={classes} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
