import { useCallback, useEffect, useRef, useState } from "react";
import MovieDialog from "/src/components/MovieDialog.jsx";
import Modal from "../components/Modal";

export default function Tendances() {
  const movies = [
    {
      name: "Squid Game",
      image: "/images/movies/squid-game.jpg",
      dialogBgImg: "/images/movies/dialog/squid-game-dialog-bg.jpg",
      logo: "/images/movies/logos/squid-game-logo.jpg",
      tags: ["2024", "18+", "Série", "Thrillers", "Drames"],
      description:
        "Tentés par un prix alléchant en cas de victoire, des centaines de joueurs désargentés acceptent de s'affronter lors de jeux pour enfants aux enjeux mortels.",
    },
    {
      name: "The Night Agent",
      image: "/images/movies/the-night-agent.jpg",
      dialogBgImg: "/images/movies/dialog/the-night-agent-dialog-bg.jpg",
      logo: "/images/movies/logos/the-night-agent-logo.jpg",
      tags: ["2025", "16+", "Série", "Action", "Thrillers", "Intrigues"],
      description:
        "Lorsqu'un agent du FBI répond à l'appel téléphonique nocturne d'une experte en cybersécurité, ils se retrouvent à dénouer un écheveau de complots politiques qui ne cesse de s'étendre.",
    },
    {
      name: "Back In Action",
      image: "/images/movies/back-in-action.jpg",
      dialogBgImg: "/images/movies/dialog/back-in-action-dialog-bg.jpg",
      logo: "/images/movies/logos/back-in-action-logo.jpg",
      tags: ["2025", "13+", "Film", "Comédie", "Action"],
      description:
        "Quinze ans après s'être éclipsés de la CIA pour fonder une famille, Matt et Emily, espions d'élite, replongent dans le monde de l'espionnage lorsque leur couverture est compromise.",
    },
    {
      name: "Zero Day",
      image: "/images/movies/zero-day.jpg",
      dialogBgImg: "/images/movies/dialog/zero-day-dialog-bg.jpg",
      logo: "/images/movies/logos/zero-day-logo.jpg",
      tags: ["2025", "16+", "Série", "Thrillers", "Drames"],
      description:
        "Rappelé à la vie active pour identifier la source d'une cyberattaque meurtrière, un ancien président des États-Unis découvre un vaste réseau de mensonges et de complots.",
    },
    {
      name: "The Recruit",
      image: "/images/movies/the-recruit.jpg",
      dialogBgImg: "/images/movies/dialog/the-recruit-dialog-bg.jpg",
      logo: "/images/movies/logos/the-recruit-logo.jpg",
      tags: ["2025", "16+", "Série", "Action", "Thrillers", "Drames"],
      description:
        "Recruté par la CIA juste après son diplôme, un jeune avocat frondeur plonge sans préparation dans l'univers redoutable de l'espionnage international.",
    },
    {
      name: "Vikings",
      image: "/images/movies/vikings.jpg",
      dialogBgImg: "/images/movies/dialog/vikings-dialog-bg.jpg",
      logo: "/images/movies/logos/vikings-logo.jpg",
      tags: ["2019", "18+", "Série", "Action", "Aventure", "Drames"],
      description:
        "Cette série réaliste s'attache aux exploits du héros Ragnar Lothbrok qui ambitionne d'étendre le pouvoir viking à la faveur d'un chef manquant de vision politique.",
    },
    {
      name: "Blacklist",
      image: "/images/movies/blacklist.jpg",
      dialogBgImg: "/images/movies/dialog/blacklist-dialog-bg.jpg",
      logo: "/images/movies/logos/blacklist-logo.jpg",
      tags: ["2023", "16+", "Série", "Thrillers", "Drames"],
      description:
        "Après s'être rendu, un brillant fugitif accepte d'aider le FBI à arrêter d'autres criminels s'il travaille avec Elizabeth Keen, une profileuse inexpérimentée.",
    },
    {
      name: "Uncharted",
      image: "/images/movies/uncharted.jpg",
      dialogBgImg: "/images/movies/dialog/uncharted-dialog-bg.jpg",
      logo: "/images/movies/logos/uncharted-logo.jpg",
      tags: ["2022", "16+", "Film", "Action", "Aventure"],
      description:
        "Nathan Drake, un ingénieux chasseur de trésors, et son mentor Sully embarquent pour une dangereuse aventure autour du monde à la recherche de l'or perdu de Magellan.",
    },
    {
      name: "La Casa de Papel",
      image: "/images/movies/la-casa-de-papel.jpg",
      dialogBgImg: "/images/movies/dialog/la-casa-de-papel-dialog-bg.jpg",
      logo: "/images/movies/logos/la-casa-de-papel-logo.jpg",
      tags: ["2017", "16+", "Série", "Thrillers", "Action", "Drames"],
      description:
        "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",
    },
    {
      name: "Sakamoto Days",
      image: "/images/movies/sakamoto-days.jpg",
      dialogBgImg: "/images/movies/dialog/sakamoto-days-dialog-bg.jpg",
      logo: "/images/movies/logos/sakamoto-days-logo.jpg",
      tags: ["2025", "16+", "Série", "Comédie", "Action", "Anime"],
      description:
        "Par amour, le meilleur des tueurs à gages, Taro Sakamoto, a pris sa retraite. Mais quand son passé le rattrape, il doit se battre pour protéger sa famille adorée.",
    },
  ];
  // VARIABLES
  const wrapperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [scrollAmount, setScrollAmount] = useState(100);
  const [isOpen, setIsOpen] = useState(false);
  const [movieDialogAddedClasses, setMovieDialogAddedClasses] = useState("");
  const [movieObject, setMovieObject] = useState({});

  const updateButtons = useCallback(() => {
    if (!wrapperRef.current || !prevRef.current || !nextRef.current) return;

    const wrapper = wrapperRef.current;
    const prev = prevRef.current;
    const next = nextRef.current;

    prev.classList.toggle("hide", wrapper.scrollLeft === 0);

    next.classList.toggle(
      "hide",
      wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth
    );
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScrollAmount(window.innerWidth >= 1280 ? 550 : 380);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    updateButtons();

    wrapper.addEventListener("scroll", updateButtons);

    return () => {
      wrapper.removeEventListener("scroll", updateButtons);
    };
  }, [updateButtons]);

  function scroll(direction) {
    if (!wrapperRef.current) return;

    wrapperRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  }

  // Open Modal
  function openModal(movie) {
    setMovieObject(movie);
    setIsOpen(true);
  }

  // Close Modal
  function closeModal() {
    setMovieObject({});
    setIsOpen(false);
  }

  return (
    <>
      <section className="tendances-section section">
        <h2>Tendances actuelles</h2>

        <div className="container">
          <button className="prev" ref={prevRef} onClick={() => scroll(-1)}>
            <span>
              <i className="fa-solid fa-chevron-left fa-xl"></i>
            </span>
          </button>

          <button className="next" ref={nextRef} onClick={() => scroll(1)}>
            <span>
              <i className="fa-solid fa-chevron-right fa-xl"></i>
            </span>
          </button>

          <div className="wrapper" ref={wrapperRef}>
            <ul className="movies-list">
              {movies.map((movie, index) => (
                <li
                  key={index}
                  className="card movie-card movie-button"
                  style={{ backgroundImage: "url(" + movie.image + ")" }}
                  onClick={() => openModal(movie)}
                >
                  <span>{index + 1}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Modal isOpen={isOpen} onClose={closeModal}>
          {/* Thumb Container */}
          <div className="thumb-container">
            <div
              className="image-container blur-down"
              style={{ background: "url(" + movieObject.dialogBgImg + ")" }}
            ></div>

            <div className="thumb-overlay"></div>

            <div className="thumb-gradient-bg"></div>

            <div
              className={`logo-container ${movieObject?.name
                ?.toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              <img
                className="logo-image"
                src={movieObject.logo}
                alt="Movie Logo"
              />
            </div>
          </div>

          {/* Movie Info */}
          <div className="content">
            <ul className="movie-tags">
              {isOpen &&
                movieObject.tags.map((tag) => (
                  <li className="movie-tag">{tag}</li>
                ))}
            </ul>

            <p className="movie-description">{movieObject.description}</p>

            <form className="actions-form">
              <input
                className="email-input input"
                type="email"
                placeholder="Adresse e-mail"
              />

              <a href="#" className="cta-button button">
                <span className="text">Commencer</span>
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </form>
          </div>
        </Modal>
      </section>
    </>
  );
}
