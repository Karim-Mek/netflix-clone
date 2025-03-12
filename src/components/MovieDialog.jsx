import { useEffect, useRef, useState } from "react";

export default function MovieDialog({
  isOpen,
  onClose,
  addedClasses = "",
  movieObject,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    // const dialogElement = document.querySelector(".movie-dialog");
    const dialogElement = dialogRef.current;
    const dialogContainer = document.querySelector(".dialog-container");
    const thumbOverlay = document.querySelector(".thumb-overlay");
    const closeButton = document.querySelector(".close-button");

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

    if (isOpen && dialogElement) {
      dialogElement.showModal();
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        if (thumbOverlay) thumbOverlay.style.display = "none";
      }, 400);

      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleKeysClick);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
        document.removeEventListener("keydown", handleKeysClick);

        dialogElement.close();

        setTimeout(() => {
          document.body.style.overflow = "";
        }, 350);
      };
    }
  }, [isOpen]);

  return (
    <dialog className="movie-dialog" ref={dialogRef}>
      <div
        className={"dialog-container" + " " + addedClasses}
        onClick={(e) => e.stopPropagation()}
      >
        <i className="fa-solid fa-xmark close-button" onClick={onClose}></i>

        <div className="thumb-image-container">
          <div className="thumb-overlay blur-down"></div>
          <img
            className="thumb-image"
            src={movieObject.image}
            alt="Movie thumb image"
          />

          <img className="logo-image" src={movieObject.logo} alt="Movie Logo" />
        </div>

        <div className="content">
          <div className="movie-tags">
            {movieObject.tags.map((tag) => (
              <span className="movie-tag">{tag}</span>
            ))}
          </div>

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
