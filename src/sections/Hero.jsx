import { useEffect, useRef, useState } from "react";
import Slide from "./hero/Slide";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    startSlideshow();

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  function startSlideshow() {
    if (!isPlaying) {
      clearInterval(intervalRef.current);
      clearInterval(timerRef.current);
      setTimer(0);
      return;
    }

    clearInterval(intervalRef.current);
    clearInterval(timerRef.current);

    setTimer(0);
    timerRef.current = setInterval(() => {
      setTimer((prev) => (prev === 6500 ? 0 : prev + (100 / 6500) * 100));
    }, 100);

    intervalRef.current = setInterval(() => {
      setTransition(false);
      setCurrentIndex((prev) => (prev === 3 ? 1 : prev + 1));
      setTransition(true);

      setTimer(0);
    }, 6500);
  }

  function stopSlideshow() {
    clearInterval(intervalRef.current);
    clearInterval(timerRef.current);
    setTimer(0);
    setIsPlaying(false);
  }

  function goPrev() {
    setTransition(false);
    setCurrentIndex((prev) => (prev === 1 ? 3 : prev - 1));
    setTransition(true);

    startSlideshow();
  }

  function goNext() {
    setTransition(false);
    setCurrentIndex((prev) => (prev === 3 ? 1 : prev + 1));
    setTransition(true);

    startSlideshow();
  }

  function play() {
    setIsPlaying(true);
  }

  function pause() {
    setIsPlaying(false);
  }

  return (
    <>
      <section className="hero-section">
        <button className="prev-button" onClick={goPrev}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="next-button" onClick={goNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        <div className="slideshow-container">
          <Slide
            bgImage="/images/hero-image.jpg"
            bgImageHeight="100%"
            maskImg="linear-gradient(white 10%, transparent 100%)"
            heading="Films et séries en illimité, et bien plus"
            subheading="À partir de 3,99 $US. Annulable à tout moment."
            transition={currentIndex === 1 ? 1 : 0}
            opacity={currentIndex === 1 ? 1 : 0}
          />
          <Slide
            bgImage="/images/movies/dialog/the-night-agent-dialog-bg.jpg"
            maskImg="linear-gradient(white 80%, transparent 100%)"
            tags={["2025", "13+", "Film", "SF"]}
            transition={currentIndex === 2 ? 1 : 0}
            opacity={currentIndex === 2 ? 1 : 0}
          />
          <Slide
            bgImage="/images/movies/dialog/squid-game-dialog-bg.jpg"
            maskImg="linear-gradient(white 80%, transparent 100%)"
            tags={["2024", "18+", "Série", "Thrillers"]}
            transition={currentIndex === 3 ? 1 : 0}
            opacity={currentIndex === 3 ? 1 : 0}
          />{" "}
        </div>

        <div className="slide-actions">
          <div className="play-actions">
            {isPlaying && (
              <i
                style={{ cursor: "pointer" }}
                className="fa-solid fa-pause"
                onClick={pause}
              ></i>
            )}
            {!isPlaying && (
              <i
                style={{ cursor: "pointer" }}
                className="fa-solid fa-play"
                onClick={play}
              ></i>
            )}
          </div>

          <div className="slides-buttons">
            {[1, 2, 3].map((idx) => (
              <div
                className="button-container"
                onClick={() => {
                  setCurrentIndex(idx);
                  stopSlideshow();
                }}
              >
                <button
                  className="slide-button"
                  style={{
                    backgroundColor:
                      currentIndex === idx
                        ? "rgba(255, 255, 255, 0.7)"
                        : "rgba(255, 255, 255, 0.4)",
                  }}
                >
                  {currentIndex === idx && isPlaying && (
                    <span style={{ width: timer + "%" }}></span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
