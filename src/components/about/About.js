// Filename - components/About.js

import { React, useEffect } from "react";
import "./about.css";
import "./styles.css";
import { FaWifi } from "react-icons/fa";
import divider from "../../assets/images/divider-free-img-1.png";
import sliderimage1 from "../../assets/AboutImg/slide-2.webp";
import sliderimage2 from "../../assets/AboutImg/slide3.webp";
import sliderimage3 from "../../assets/AboutImg/slide-4.webp";
import sliderimage4 from "../../assets/AboutImg/slide-5.webp";
import sliderimage5 from "../../assets/AboutImg/slide-6.webp";
import desiHome from "../../assets/images/desi-home.jpg";
import logo2 from "../../assets/AboutImg/cropped-siteicon-black.webp";
// import instlogo from "../../assets/AboutImg/instagram-reels-white-icon.png";
// import loading from "../../assets/AboutImg/download-removebg-preview.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
// import { IoIosArrowUp } from "react-icons/io";

const About = () => {
  // Define a function to observe elements using IntersectionObserver
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

  return (
    <div className="about">
      {/* About Us Head */}
      <div id="Top" className="Aboutus-head">
        <div className="divider-img">
          <div className="abt-content">
            <img
              style={{ width: "200px" }}
              className="abt-img"
              src={divider}
              alt="divider-img"
            ></img>
            <section className="hidden">
              <p id="knowMoreText" className="animate-text-know ">
                Know More
              </p>
            </section>
            <section className="hidden" id="aboutText">
              <p className="animate-text-about">About Us.</p>
            </section>
            <p className="diamond-square"></p>
          </div>
        </div>
      </div>

      {/* Our Resto. */}
      <div className="Our-Restro">
        <section className="hidden">
          <h1 id="ourRestroText" className="animate-text-OurRestro">
            Our Resto.
          </h1>
        </section>
        <p style={{ fontSize: "1.2rem", fontWeight: "400" }}>
          WeDesi is here to add happiness to your lives
        </p>
        <img src={divider} alt="divider-img"></img>
        <div className="OurResto-content">
          <p style={{ fontSize: "1.2rem", fontWeight: "400" }}>
            WeDesi is here to add happiness to your lives by providing you the
            most delish Indian Sweets and everyone’s favorite Indian Street
            food. Wedesi is the first Indian restaurant in Montreal to bring the
            Indian sweets and authentic street foods from all over India under
            one roof. If you want to celebrate happiness or take a stroll
            through Indian streets, you have come to the right place. Our
            diverse menu will introduce you to all regions of India with our
            authentic flavours and spices. WeDesi is looking forward to be part
            of your celebrations and special occasions and creating moments
            filled with happiness with your loved ones.
          </p>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={sliderimage1} alt="divider-img"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimage2} alt="divider-img"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimage3} alt="divider-img"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimage4} alt="divider-img"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimage5} alt="divider-img"></img>
          </SwiperSlide>
        </Swiper>

        {/*  A Few Words About Us*/}
        <div style={{ marginTop: "8%" }} className="FewWordsAboutUs">
          <div className="left">
            <h1
              style={{
                fontSize: "3rem",
                fontFamily: "Abril",
                fontWeight: "bold",
              }}
            >
              A Few Words About Us
            </h1>
            <p style={{ marginBottom: "5%" }}>Lakhvir Singh</p>
            <div style={{ marginBottom: "-5%" }} className="underline" />
            <p
              style={{
                marginBottom: "30px",
                fontSize: "1.2rem",
                fontWeight: "400",
              }}
            >
              As a teenager coming to a new country was no easy task. Singh
              started his career in the food industry from the beginning and
              ploughed through all the challenges he faced. After years of
              learning and working hard he decided to open his own place and
              built a successful restaurant. With 10 years of experience of
              running his own restaurant he finally decided it was about time to
              tackle yet another challenge and achieve his goal of opening an
              Indian Sweets place. He has always wanted to build a place where
              customers would come to enjoy the authentic street food but most
              importantly take some happiness(sweets) back home in a box!!
            </p>
            <a className="Button23" href="www.facebook.com">
              View Menu
            </a>
          </div>
          <div className="right">
            <div className="rightimage">
              <img src={desiHome} alt="img"></img>
              <div className="rightcontent">
                <p>
                  <FaWifi size={60} />{" "}
                </p>
                <p>Free Wifi For Everyone</p>
                <p>Ask for password to any staff members</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Food Policy */}
        <div className="policy-head1">
          <div className="policy-img1">
            <div className="abt-content1">
              <p className="diamond-square-upper2"></p>
              <div className="d-flex">
                <div className="OurFoodPolicy">
                  <h1>Our Food Policy</h1>
                  <p>
                    Our diverse menu will introduce you to all regions of India
                    with our authentic flavors and spices. WeDesi is looking
                    forward to be part of your celebrations and special
                    occasions and creating moments filled with happiness with
                    your loved ones.
                  </p>
                </div>
                <div className="OurCoreValues">
                  <h1>Our Core Values</h1>
                  <p>
                    The place where customers would come to enjoy the authentic
                    street food but most importantly take some happiness(sweets)
                    back home in a box!!
                  </p>
                </div>
              </div>
              <p className="diamond-squaree2"></p>
            </div>
          </div>
        </div>
        <div className="RenownedChefs-container1">
          <div className="RenownedChefs-left1">
            <h1 className="Renowned-text1">Renowned Chefs</h1>
            <p className="mtte1">Meet The Taste Experts</p>
            <p className="mtte-des1">
              With 10 years of experience of running his own restaurant he
              finally decided it was about time to tackle yet another challenge
              and achieve his goal of opening an Indian Sweets place.
            </p>
            <hr style={{ marginTop: "15%" }} className="underline" />
            <h1 style={{ marginTop: "-10px" }}>Careers</h1>
            <p className="mtte">Be a Part of Our Restaurant</p>
            <p className="mtte-des">
              We strive in creating a wedesi work environment for each and every
              employee. We not only prioritize the best quality food but also
              the best workplace for our workers.
            </p>
            <a className="Button23" href="www.facebook.com">
              Apply Today
            </a>
          </div>
          <div className="RenownedChefs-right">
            <div className="logocrop">
              <img src={logo2} alt="logo"></img>
              <h2 style={{ fontSize: "2rem", marginTop: "-3px" }}>
                Lakhvir Singh
              </h2>
              <p
                style={{ color: "red", marginTop: "-10px", fontWeight: "600" }}
              >
                Founder / Head Chef
              </p>
              <img style={{ width: "80px" }} src={divider} alt="divider"></img>
            </div>
          </div>
        </div>
        {/* <div className="ReviewUsOn-containers">
          <h1 style={{ fontSize: "3rem" }}>Review Us On</h1>
          <div className="Icons">
            <div className="iconborder">
              <div className="socialicon">
                <a
                  style={{ background: "#4267B2" }}
                  href="https://www.facebook.com/people/Wedesi/100093700947943/?mibextid=LQQJ4d"
                >
                  f
                </a>
              </div>
            </div>

            <div className="iconborder">
              <div className="socialicon">
                <a
                  style={{ background: " #A9D39E" }}
                  href="https://www.we-desi.com/about-us/#"
                >
                  <img src={loading} alt="logloading"></img>
                </a>
              </div>
            </div>
            <div className="iconborder">
              <div className="socialicon">
                <a
                  style={{ background: "#C13584" }}
                  href="https://www.instagram.com/wedesi_mtl/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                >
                  <img src={instlogo} alt="instalogo"></img>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div style={{ marginTop: "10%", float: "right" }} className="movetotop">
          <a
            style={{
              fontSize: "30px",
              borderRadius: "0",
              marginRight: "5rem",
              padding: "10px 20px",
            }}
            className="Button23"
            href="#Top"
          >
            ^
          </a>
        </div> */}
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default About;
