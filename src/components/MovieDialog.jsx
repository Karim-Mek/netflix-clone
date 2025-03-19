import { useEffect, useRef, useState } from "react";

export default function MovieDialog({
  isOpen,
  onClose,
  addedClasses = "",
  movieObject,
}) {
  const dialogRef = useRef(null);
  const dialogContainerRef = useRef(null);
  const thumbOverlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const dialogContainer = dialogContainerRef.current;
    const thumbOverlay = thumbOverlayRef.current;
    const closeButton = closeButtonRef.current;

    const handleOutsideClick = (e) => {
      if (dialogContainer && !dialogContainer.contains(e.target)) {
        onClose();
      }
    };

    const handleKeysClick = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === " ") {
        closeButton.click();
      }
    };

    if (dialog && isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        if (thumbOverlay) thumbOverlay.style.display = "none";
      }, 400);

      setTimeout(() => {
        document.addEventListener("click", handleOutsideClick);
        document.addEventListener("keydown", handleKeysClick);
      }, 200);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
        document.removeEventListener("keydown", handleKeysClick);

        dialog.close();

        setTimeout(() => {
          document.body.style.overflow = "";
        }, 350);
      };
    }

    // if (dialog) {
    // if (isOpen && dialog) {
    //   console.log(isOpen ? "true" : "false");
    //   console.log(dialog);

    //   dialog.showModal();
    //   document.body.style.overflow = "hidden";

    //   setTimeout(() => {
    //     if (thumbOverlay) thumbOverlay.style.display = "none";
    //   }, 400);

    //   document.addEventListener("click", handleOutsideClick);
    //   document.addEventListener("keydown", handleKeysClick);

    //   return () => {
    //     document.removeEventListener("click", handleOutsideClick);
    //     document.removeEventListener("keydown", handleKeysClick);

    //     dialog.close();

    //     setTimeout(() => {
    //       document.body.style.overflow = "";
    //     }, 350);
    //   };
    // }
  }, []);

  return (
    <dialog className="movie-dialog" ref={dialogRef}>
      <div
        className={"dialog-container" + " " + addedClasses}
        ref={dialogContainerRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <i className="fa-solid fa-xmark close-button" onClick={onClose}></i> */}
        <span
          class="material-symbols-outlined close-button"
          ref={closeButtonRef}
          onClick={onClose}
        >
          close
        </span>

        <div className="thumb-image-container">
          <div className="thumb-overlay blur-down" ref={thumbOverlayRef}></div>
          <img
            className="thumb-image"
            src={movieObject.image}
            alt="Movie thumb image"
          />

          {/* <img className="logo-image" src={movieObject.logo} alt="Movie Logo" /> */}
        </div>

        <div className="content">
          {/* <div className="movie-tags">
            {movieObject.tags.map((tag) => (
              <span className="movie-tag">{tag}</span>
            ))}
          </div> */}

          <p className="movie-description">{movieObject.description}</p>

          <button className="cta-button button">
            <span className="text">Commencer</span>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </dialog>
  );
}
