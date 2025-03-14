import { useEffect, useState } from "react";
import MovieDialog from "/src/components/MovieDialog.jsx";

export default function Tendances() {
  const movies = [
    {
      image: "/public/images/movies/squid-game.jpg",
      logo: "/public/images/movies/logos/squid-game-logo.png",
      tags: ["2024", "18+", "Série", "Thrillers", "Drames"],
      description:
        "Tentés par un prix alléchant en cas de victoire, des centaines de joueurs désargentés acceptent de s'affronter lors de jeux pour enfants aux enjeux mortels.",
    },
    {
      image: "/public/images/movies/the-night-agent.jpg",
      logo: "/public/images/movies/logos/the-night-agent-logo.png",
      tags: ["2025", "16+", "Série", "Action", "Thrillers", "Intrigues"],
      description:
        "Lorsqu'un agent du FBI répond à l'appel téléphonique nocturne d'une experte en cybersécurité, ils se retrouvent à dénouer un écheveau de complots politiques qui ne cesse de s'étendre.",
    },
    {
      image: "/public/images/movies/back-in-action.jpg",
      logo: "/public/images/movies/logos/back-in-action-logo.png",
      tags: ["2025", "13+", "Film", "Comédie", "Action"],
      description:
        "Quinze ans après s'être éclipsés de la CIA pour fonder une famille, Matt et Emily, espions d'élite, replongent dans le monde de l'espionnage lorsque leur couverture est compromise.",
    },
    {
      image: "/public/images/movies/zero-day.jpg",
      logo: "/public/images/movies/logos/zero-day-logo.png",
      tags: ["2025", "16+", "Série", "Thrillers", "Drames"],
      description:
        "Rappelé à la vie active pour identifier la source d'une cyberattaque meurtrière, un ancien président des États-Unis découvre un vaste réseau de mensonges et de complots.",
    },
    {
      image: "/public/images/movies/the-recruit.jpg",
      logo: "/public/images/movies/logos/the-recruit-logo.png",
      tags: ["2025", "16+", "Série", "Action", "Thrillers", "Drames"],
      description:
        "Recruté par la CIA juste après son diplôme, un jeune avocat frondeur plonge sans préparation dans l'univers redoutable de l'espionnage international.",
    },
    {
      image: "/public/images/movies/vikings.jpg",
      logo: "/public/images/movies/logos/vikings-logo.png",
      tags: ["2019", "18+", "Série", "Action", "Aventure", "Drames"],
      description:
        "Cette série réaliste s'attache aux exploits du héros Ragnar Lothbrok qui ambitionne d'étendre le pouvoir viking à la faveur d'un chef manquant de vision politique.",
    },
    {
      image: "/public/images/movies/demon-city.jpg",
      logo: "/public/images/movies/logos/demon-city-logo.png",
      tags: ["2025", "18+", "Film", "Action", "Thrillers"],
      description:
        'Accusé à tort du meurtre de sa famille et laissé pour mort, un ancien tueur à gages est prêt à tout pour se venger des "démons" masqués qui se sont emparés de sa ville.',
    },
    {
      image: "/public/images/movies/uncharted.png",
      logo: "/public/images/movies/logos/uncharted-logo.png",
      tags: ["2022", "16+", "Film", "Action", "Aventure"],
      description:
        "Nathan Drake, un ingénieux chasseur de trésors, et son mentor Sully embarquent pour une dangereuse aventure autour du monde à la recherche de l'or perdu de Magellan.",
    },
    {
      image: "/public/images/movies/la-casa-de-papel.jpg",
      logo: "/public/images/movies/logos/la-casa-de-papel-logo.png",
      tags: ["2017", "16+", "Série", "Thrillers", "Action", "Drames"],
      description:
        "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",
    },
    {
      image: "/public/images/movies/sakamoto-days.jpg",
      logo: "/public/images/movies/logos/sakamoto-days-logo.png",
      tags: ["2025", "16+", "Série", "Comédie", "Action", "Anime"],
      description:
        "Par amour, le meilleur des tueurs à gages, Taro Sakamoto, a pris sa retraite. Mais quand son passé le rattrape, il doit se battre pour protéger sa famille adorée.",
    },
  ];
  // VARIABLES
  const [scrollAmount, setScrollAmount] = useState(450);
  const [isOpen, setIsOpen] = useState(false);
  const [movieDialogAddedClasses, setMovieDialogAddedClasses] = useState("");
  const [movieObject, setMovieObject] = useState({});

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    // LOGIC
    if (window.innerWidth >= 1280) {
      setScrollAmount(550);

      console.log(scrollAmount);
    }

    updateButtons();

    // EVENTS
    prev.addEventListener("click", () => {
      wrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    next.addEventListener("click", () => {
      wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    wrapper.addEventListener("scroll", updateButtons);

    // FUNCTIONS

    function updateButtons() {
      if (wrapper.scrollLeft === 0) {
        prev.classList.add("hide");
        prev.classList.add("translate-left");
      } else {
        prev.classList.contains("hide") && prev.classList.remove("hide");
        prev.classList.contains("translate-left") &&
          prev.classList.remove("translate-left");
      }

      if (wrapper.scrollLeft + wrapper.clientWidth === wrapper.scrollWidth) {
        next.classList.add("hide");
        next.classList.add("translate-right");
      } else {
        next.classList.contains("hide") && next.classList.remove("hide");
        next.classList.contains("translate-right") &&
          next.classList.remove("translate-right");
      }
    }
  }, []);

  // Open Dialog
  function openDialog(movie) {
    setTimeout(() => {
      setIsOpen(true);

      setMovieDialogAddedClasses("opacity-in scale-up");

      setMovieObject(movie);
    }, 100);
  }
  // Close Dialog
  function closeDialog() {
    setMovieDialogAddedClasses("opacity-out scale-down");

    setTimeout(() => {
      setIsOpen(false);
      setMovieObject({});
    }, 100);
  }

  return (
    <section className="tendances-section section">
      <h2>Tendances actuelles</h2>

      <div className="container">
        <button className="prev">
          <span>
            <i className="fa-solid fa-chevron-left fa-xl"></i>
          </span>
        </button>

        <button className="next">
          <span>
            <i className="fa-solid fa-chevron-right fa-xl"></i>
          </span>
        </button>

        <div className="wrapper">
          <ul className="movies-list">
            {movies.map((movie, index) => (
              <li
                className="card movie-card movie-button"
                style={{ backgroundImage: "url(" + movie.image + ")" }}
                onClick={() => openDialog(movie)}
              >
                <span>{index + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && (
        <>
          <MovieDialog
            isOpen={isOpen}
            onClose={closeDialog}
            addedClasses={movieDialogAddedClasses}
            movieObject={movieObject}
          />
        </>
      )}
    </section>
  );
}
