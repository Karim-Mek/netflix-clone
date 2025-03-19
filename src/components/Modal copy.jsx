import { CSSTransition } from "react-transition-group";

export default function Modal({ isOpen, onClose, children }) {
  function handleClose() {
    console.log("Closing");

    setTimeout(onClose, 300);
  }

  if (!isOpen) return null;

  return (
    <div className={isOpen ? "modal-overlay" : "delete"} onClick={handleClose}>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="modal-content"
        unmountOnExit
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={handleClose}>
            &times;
          </button>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
}

// ------
// import { CSSTransition } from "react-transition-group";

// export default function Modal({ isOpen, onClose, children }) {
//   function handleClose() {
//     setTimeout(onClose, 300); // Wait for the animation before unmounting
//   }

//   return (
//     <div className={`modal-overlay ${isOpen ? "visible" : "hidden"}`} onClick={handleClose}>
//       <CSSTransition in={isOpen} timeout={300} classNames="modal-content" unmountOnExit>
//         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//           <button className="close-button" onClick={handleClose}>&times;</button>
//           {children}
//         </div>
//       </CSSTransition>
//     </div>
//   );
// }
