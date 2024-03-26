import React, { useEffect, useRef, useState } from "react";
import demovid from "../../assets/video/demoVideo.mp4";
import divider from "../../assets/images/divider-free-img-1.png";
import image1 from "../../assets/images/main-page1.jpg";
import image2 from "../../assets/images/main-page-2.jpg";
import burger from "../../assets/images/burger.png";
import chaatCir from "../../assets/images/chaat-cir.png";
import chinese from "../../assets/images/chinese.png";
import south from "../../assets/images/south.png";
import tikka from "../../assets/images/tikka.png";
import naan from "../../assets/images/naan.png";
import drink from "../../assets/images/drink.png";
import client1 from "../../assets/images/client1-free-img.png";
import client2 from "../../assets/images/client2-free-img.png";
import client3 from "../../assets/images/client3-free-img.png";
import client4 from "../../assets/images/client4-free-img.png";
import "./Home.css";
import "../about/about.css";
import { NavLink } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function Home() {
  const textOverlayRef = useRef(null);
  const textOverlayRef1 = useRef(null);
  const textOverlayRef2 = useRef(null);
  const textOverlayRef3 = useRef(null);
  const textBestOverlayRef = useRef(null);
  const drinkImageRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const observeElements = () => {
    // Create an IntersectionObserver with a callback function
    const observer = new IntersectionObserver((entries) => {
      // Iterate over each entry detected by the observer
      entries.forEach((entry) => {
        // Check if the observed element is currently intersecting with the viewport
        if (entry.isIntersecting) {
          // If the element is intersecting, add the "show" class to reveal it
          entry.target.classList.add("show");

          // Based on the ID of the observed element, add specific animation classes
          if (entry.target.id === "aboutText") {
            entry.target.classList.add("animate-text-about");
          } else if (entry.target.id === "knowMoreText") {
            entry.target.classList.add("animate-text-know");
          } else if (entry.target.id === "ourRestroText") {
            entry.target.classList.add("animate-text-OurRestro");
          } else if (entry.target.id === "TheyAllLoveOurFood") {
            entry.target.classList.add("animate-text-happy-hours1");
          } else if (entry.target.id === "AllFoodAre_Bestinclass") {
            entry.target.classList.add("animate-text-happy-hours1");
          } else if (entry.target.id === "Theoutstandingtaste") {
            entry.target.classList.add("animate-text-happy-hours1");
          }

          // Stop observing the element once the animation is applied
          observer.unobserve(entry.target);
        }
      });
    });

    // Select all elements with the class "hidden" to observe
    const hiddenElements = document.querySelectorAll(".hidden");
    // Observe each hidden element
    hiddenElements.forEach((el) => observer.observe(el));
  };

  // Call the observeElements function when the component mounts or reloads
  useEffect(() => {
    observeElements();
  }, []); // Empty dependency array ensures the observer is attached only once

  useEffect(() => {
    const drinkImage = drinkImageRef.current;
    if (drinkImage && isShaking) {
      drinkImage.classList.add("shake-animation");
    }

    return () => {
      if (drinkImage) {
        drinkImage.classList.remove("shake-animation");
      }
    };
  }, [isShaking]);

  useEffect(() => {
    function handleScroll() {
      const textBestOverlay = textBestOverlayRef.current;
      if (textBestOverlay && isInViewport(textBestOverlay) && !animate) {
        setAnimate(true);
        // Remove the event listener to prevent multiple animations
        window.removeEventListener("scroll", handleScroll);
      }
    }

    const textBestOverlay = textBestOverlayRef.current;
    if (textBestOverlay) {
      // Timeout to allow time for initial rendering before triggering animation
      setTimeout(() => {
        textBestOverlay.classList.add("animate__fadeInDown_best");
      }, 100);
    }

    const textOverlay3 = textOverlayRef3.current;
    if (textOverlay3) {
      // Timeout to allow time for initial rendering before triggering animation
      setTimeout(() => {
        textOverlay3.classList.add("animate__fadeInDown_Delicacies");
      }, 100);
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animate]);

  useEffect(() => {
    // Trigger animation when component mounts or updates
    const textOverlay = textOverlayRef.current;
    if (textOverlay) {
      // Timeout to allow time for initial rendering before triggering animation
      setTimeout(() => {
        textOverlay.classList.add("animate__fadeInDown");
      }, 100);
    }

    const textOverlay2 = textOverlayRef2.current;
    if (textOverlay2) {
      // Timeout to allow time for initial rendering before triggering animation
      setTimeout(() => {
        textOverlay2.classList.add("animate__fadeInDown");
      }, 100);
    }
    const textOverlay1 = textOverlayRef1.current;
    if (textOverlay1) {
      // Timeout to allow time for initial rendering before triggering animation
      setTimeout(() => {
        textOverlay1.classList.add("animate__fadeInDown");
      }, 100);
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="video-container position-relative">
        {/* <video autoPlay loop muted className="video">
                    <source src="https://www.youtube.com/embed/2p7_8lA87iM?start=40&end=80&autoplay=1" type="video/mp4" />
                    {/* Add other video sources if needed */}
        {/* Your browser does not support the video tag. */}
        {/* </video>  */}
        <div className="video-container">
          <iframe
            title="YouTube Video"
            className="video"
            src="https://www.youtube.com/embed/2p7_8lA87iM?start=40&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=0"
            frameborder="0"
            allow="autoplay; loop; accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="1403px"
            height="730px"
          />
          <div className="video-shadow"></div>
        </div>
        <img className="divider-image" src={divider} alt="divider" />
        <div id="bestIn" ref={textOverlayRef2} className="text-overlay2">
          <text>Best in Montreal, QC</text>
          {/* Add any other text or components as needed */}
        </div>
        <div ref={textOverlayRef} className="text-overlay">
          <text>We Desi</text>
          {/* Add any other text or components as needed */}
        </div>
        <div className="text-overlay1" ref={textOverlayRef1}>
          <text>
            Wedesi is the first Indian restaurant in Montreal to bring the
            Indian sweets and authentic street foods from all over India under
            one roof
          </text>
          {/* Add any other text or components as needed */}
        </div>
        <NavLink to="/menu" activeClassName="active">
          <div className="elementor-button-wrapper">
            <a className="elementor-button">Explore Menu</a>
          </div>
        </NavLink>
        <p className="itemdiamond-square-home"></p>
      </div>
      <div className="section-2">
        <div className="section-2-first p-5 position-relative">
          <div
            ref={textBestOverlayRef}
            className={`best-desi-text ${animate ? "animate" : ""}`}
          >
            <section className="hidden">
              <text id="knowMoreText" animate-text-know>
                The Best Desi Food
              </text>
            </section>
          </div>
          <img className="" src={divider} alt="divider" />
          <p className="section-2-text-paragraph">
            Wedesi is the first Indian restaurant in Montreal to bring the
            Indian sweets and authentic street foods from all over India under
            one roof. If you want to celebrate happiness or take a stroll
            through Indian streets, you have come to the right place.
          </p>
          <NavLink to="/contact" className="nav-item" activeClassName="active">
            <button className="reservation">Reservation</button>
          </NavLink>
        </div>
        <img className="p-2" src={image1} alt="" width={500} height={700} />
        <img className="p-2" src={image2} alt="" width={500} height={700} />
      </div>
      <div className="bg bg2">
        <p className="diamond-square-upper2-home"></p>
        <div
          ref={textOverlayRef3}
          className={`Delicacies ${animate ? "animate" : ""}`}
        >
          <section className="hidden">
            <text id="knowMoreText">Featured Delicacies</text>
          </section>
          {/* <text>Featured Delicacies</text> */}
        </div>
        <text
          className="text-white"
          style={{
            zIndex: 10,
            fontSize: "1.5vw",
            fontWeight: 500,
            marginTop: "-8vh",
          }}
        >
          Fresh From the kitchen
        </text>
        <img className="divider-image1" src={divider} alt="divider" />

        <text
          className="AllFoodAre_Bestinclass"
          style={{
            zIndex: 10,
            fontSize: "1.5vw",
            fontWeight: 500,
            marginTop: "10vh",
            color: "white",
          }}
        >
          All Food Are Best in class
        </text>

        <div className="image-shadow"></div>
      </div>
      <div className="section-4">
        <div className="row1">
          <div className="column p-4 chatpatachat">
            <div className="w-50 p-5">
              <text className="text-section-4">Chatpata Chats</text>
              <p className="text-white">
                Family of savoury snacks served at roadside tracks from stalls
                or food carts
              </p>
            </div>
            <div className="image-container">
              <img
                className="rotate-on-hover animate-text-happy-hours-right"
                src={chaatCir}
                alt="chaatCir"
              />
            </div>
          </div>
          <div className="column p-4">
            <div className="w-50 p-5">
              <text className="text-section-4">Tikka & Snacks</text>
              <p className="text-white">
                Flavor-packed appetizer in which marinated paneer/soya pieces
                are grilled until crisp and slightly charred
              </p>
            </div>
            <div className="image-container">
              <img
                className="rotate-on-hover animate-text-happy-hours-left"
                src={tikka}
                alt="tikka"
              />
            </div>
          </div>
        </div>
        <div className="row1">
          <div className="column p-4">
            <div className="w-50 p-5">
              <text className="text-section-4">Burgers and Rolls</text>
              <p className="text-white">
                Popular sandwich made from potato patty/tikka that are placed
                between two halves of a bun or tortilla
              </p>
            </div>
            <div className="image-container">
              <img
                className="rotate-on-hover animate-text-happy-hours-right"
                src={burger}
                alt="burger"
              />
            </div>
          </div>
          <div className="column p-4">
            <div className="w-50 p-5">
              <text className="text-section-4">South Indian</text>
              <p className="text-white">
                Cuisines of five South Indian states namely Tamil Nadu,
                Karnataka, Kerala, Andhra Pradesh and Telangana
              </p>
            </div>
            <div className="image-container">
              <img
                className="rotate-on-hover animate-text-happy-hours-left"
                src={south}
                alt="south"
              />
            </div>
          </div>
        </div>
        <div className="row1">
          <div className="column p-4">
            <div className="w-50 p-5">
              <text className="text-section-4">Prantha and Naan</text>
              <p className="text-white">
                Indian breads cooked on tawa or in clay oven
              </p>
            </div>
            <div className="image-container">
              <img
                className="rotate-on-hover animate-text-happy-hours-right"
                src={naan}
                alt="naan"
              />
            </div>
          </div>
          <div className="column p-4">
            <div className="w-50 p-5">
              <text className="text-section-4">Indo Chinese</text>
              <p className="text-white">
                Stir-fried in a wok, Chino-Indian food takes Chinese culinary
                styles and adds flavours familiar to the Indian palate
              </p>
            </div>
            <div className="image-container">
              <img
                className="rotate-on-hover animate-text-happy-hours-left"
                src={chinese}
                alt="chinese"
              />
            </div>
          </div>
        </div>
        <NavLink to="/menu" activeClassName="active">
          <button className="nav-item reservation1">View All menu</button>
        </NavLink>
        <div className="image-shadow-viewAll"></div>
      </div>
      <div className="section-5">
        <div className="section-5-1">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="white-lines"></div>
            <div className="white-lines"></div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="drink">
              <img
                ref={drinkImageRef}
                className="vibrating-image"
                src={drink}
                alt="drink"
              />
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="white-lines"></div>
            <div className="white-lines"></div>
          </div>
        </div>
        <div className="section-5-2">
          <section className="hidden">
            <text id="knowMoreText"> Enjoy 30% Off on All Drinks</text>
          </section>
          {/* <text className="animate-text-happy-hours">
            Enjoy 30% Off on All Drinks
          </text> */}
        </div>
        <div className="section-5-3">
          <section className="hidden" id="AllFoodAre_Bestinclass">
            <text className="animate-text-happy-hours1">
              Every Thursday, 4PM – 7PM
            </text>
          </section>
        </div>
        <div className="section-5-Happy" id="happy-hours">
          <section className="hidden">
            <text id="knowMoreText">Happy Hours</text>
          </section>
          {/* <text className="animate-text-happy-hours">Happy Hours</text> */}
        </div>
        <NavLink to="/menu" activeClassName="active">
          <button
            className="reservation1 text-white"
            style={{ zIndex: 11, marginBottom: "5vh", marginTop: "40vh" }}
          >
            View menu
          </button>
        </NavLink>
        <p className="diamond-squaree"></p>
        <div className="image-shadow"></div>
      </div>
      <div className="section-6">
        <div className="section-6-1">
          <section className="hidden" id="TheyAllLoveOurFood">
            <text className="animate-text-happy-hours1">
              They All Love Our Food
            </text>
          </section>
        </div>
        <img className="divider-image1" src={divider} alt="divider" />
        <div className="section-6-2">
          <section className="hidden" id="Theoutstandingtaste">
            <text className="animate-text-happy-hours1">
              The outstanding taste and presentation of our food have earned us
              a loyal following of satisfied customers.
            </text>
          </section>
        </div>
      </div>
      <div className="section-7">
        <div className="card">
          <text className="section-7-text">
            "I had a pleasant dining experience at this sweets and veg
            restaurant!!"
          </text>
          <div className="mt-5">
            <img src={client4} alt="client4" />
            <text className="mr-2"> - Bryan G</text>
          </div>
        </div>
        <div className="card">
          <text className="section-7-text">
            "it has quickly become one of my favorite places to dine.!!"
          </text>
          <div className="mt-5">
            <img src={client1} alt="client1" />
            <text> - Laura Petracio</text>
          </div>
        </div>
        <div className="card">
          <text className="section-7-text">
            "I always visit here, and they always surprise me."
          </text>
          <div className="mt-4">
            <img src={client2} alt="client2" />
            <text> - Harold Z</text>
          </div>
        </div>
        <div className="card">
          <text className="section-7-text">
            "The sweets are also heavenly, with a wide range of traditional and
            innovative desserts"
          </text>
          <div className="mt-5">
            <img src={client3} alt="client3" />
            <text> - Laura Petracio</text>
          </div>
        </div>
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Home;
