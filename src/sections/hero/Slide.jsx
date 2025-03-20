import { useEffect, useState } from "react";

export default function Slide({
  bgImage = "/images/hero-image.jpg",
  bgImageHeight = "50%",
  maskImg,
  heading = "",
  subheading = "",
  description = "",
  tags = [],
  logoImg = "",
  transition = false,
  opacity,
}) {
  const styles = {
    overlay: {
      opacity,
      display: "none !important",
    },
    slide: {
      backgroundSize: "cover",
      backgroundBlendMode: "multiply",
      opacity,
      // transition: "opacity 2s ease !important",
    },
    bgImg: {
      height: bgImageHeight,
      maskImage: maskImg,
    },
  };

  const [slideClasses, setSlideClasses] = useState("");
  const [overlayClasses, setOverlayClasses] = useState("");

  useEffect(() => {
    handleSlideStyle();

    handleOverlayStyle();
  }, [transition, opacity]);

  function handleSlideStyle() {
    if (opacity === 0 || !transition) {
      setSlideClasses("slide fadeout-translate");

      setTimeout(() => {
        setSlideClasses("hide-visibility");
      }, 1000);
    } else {
      setSlideClasses("slide active-transition");
    }
  }

  function handleOverlayStyle() {
    if (transition) {
      setOverlayClasses("slide-overlay transition-bg");

      setTimeout(() => {
        setOverlayClasses("hide-visibility");
      }, 1000);
    } else {
      setOverlayClasses("hide-visibility");
    }
  }

  return (
    <div className={slideClasses} style={styles.slide}>
      <div className={overlayClasses}></div>

      <img
        className={transition ? "bg-image translate-img" : "bg-image"}
        src={bgImage}
        alt="Background Image"
        style={styles.bgImg}
      />

      <div className="container">
        <div className="info">
          <div className="wrapper">
            <h1>{heading}</h1>
            <p className="sub-heading">{subheading}</p>

            <div className="tags">
              {tags && (
                <ul>
                  {tags.map((tag) => (
                    <li>{tag}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="description">{description}</div>
            {description && <div className="vertical-space"></div>}
          </div>

          {logoImg && (
            // <div className="logo-container">
            <img className="logo-img" src={logoImg} alt="Movie Logo" />
            // </div>
          )}
        </div>

        <div className="actions">
          <p className="text">
            <small>
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre abonnement.
            </small>
          </p>
          <form className="actions-form">
            <input
              className="email-input input"
              type="email"
              placeholder="Adresse e-mail"
            />
            <a href="#" className="button cta-button">
              <span className="text">Commencer</span>
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
