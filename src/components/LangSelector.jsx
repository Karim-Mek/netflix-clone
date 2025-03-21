import { useEffect, useRef, useState } from "react";

export default function LangSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const selectBtnRef = useRef(null);

  useEffect(() => {
    function handleOutClick(event) {
      if (
        isOpen &&
        selectBtnRef.current &&
        !selectBtnRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleOutClick);
    }

    return () => {
      document.removeEventListener("click", handleOutClick);
    };
  }, [isOpen]);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        ref={selectBtnRef}
        className={`select-button ${isOpen ? "open" : ""}`}
        onClick={handleOpen}
      >
        <img
          className="lang-icon"
          src="/images/language-icon.png"
          alt="Language Icon"
        />
        <span className="lang-text">Français</span>
        <i class="fa-solid fa-caret-down fa-xs"></i>
      </button>

      {isOpen && (
        <ul className="lang-options">
          <li>العربية</li>
          <li>Français</li>
          <li>English</li>
        </ul>
      )}
    </>
  );
}
