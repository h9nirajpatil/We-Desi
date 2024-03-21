// Filename - components/Contact.js
import { React, useEffect } from "react";
import "./contact.css";
import divider from "../../assets/images/divider-free-img-1.png";

import "../about/about.css";
import "../../App.css";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const ContactUs = () => {
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
    <>
      <div className="contact-container">
        <div id="Top" className="contactus-head">
          <div className="cntdivider-img">
            <div className="cnt-content">
              <img
                style={{ width: "220px", marginLeft: "250px" }}
                className="abt-img"
                src={divider}
                alt="divider-img"
              ></img>
              <section className="hidden">
                <p id="knowMoreText" className="animate-text-know">
                  Reserve A Table
                </p>
              </section>
              <section className="hidden" id="aboutText">
                <section className="hidden">
                  <p
                    className="animate-text-about"
                    style={{
                      color: "white",
                      fontSize: "6rem",
                      fontWeight: "700",
                      margin: "-60px 0px ",
                    }}
                  >
                    Contact Us.
                  </p>
                </section>

                <section className="hidden">
                  <p
                    id="aboutText"
                    className="animate-text-about"
                    style={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "100",
                      margin: "10% 0px ",
                    }}
                  >
                    Wedesi is the first Indian restaurant in Montreal to bring
                    the Indian sweets <br /> and authentic street foods from all
                    over India under one roof.
                  </p>
                </section>
              </section>

              <p className="cntdiamond-square"></p>
            </div>
          </div>
        </div>

        {/* Our Resto. */}
        <div className="Our-Restro">
          <section className="hidden">
            <h1
              style={{ fontSize: "3rem" }}
              id="ourRestroText"
              className="animate-text-OurRestro mt-5"
            >
              Are You Hungry?
            </h1>
          </section>
          <p className="DineWithUs">Come, Dine With Us!</p>
          <p className="DineWithUs-p">
            Our diverse menu will introduce you to all regions of India with our
            <br />
            authentic flavours and spices.
          </p>
          <div className="cntheline" />
          <section className="hidden">
            <h1
              style={{ fontSize: "2rem" }}
              id="ourRestroText"
              className="animate-text-OurRestro"
            >
              For Restaurant Dinning
            </h1>
          </section>
          <p className="ForRestaurantDinning">5146840007</p>
          <img src={divider} alt="divider-img"></img>
          <section className="hidden">
            <h1
              style={{ fontSize: "2rem" }}
              id="ourRestroText"
              className="animate-text-OurRestro"
            >
              Have Feedback?
            </h1>
          </section>
          <p className="HaveFeedback">
            where customers would come to enjoy the authentic street food but
            <br />
            most importantly take some happiness(sweets) back home in a box!!
          </p>
          {/*  A Few Words About Us*/}
          <div style={{ marginTop: "8%" }} className="FewWordsAboutUs">
            <div className="left">
              <form action="/submit-form" method="post">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter the subject"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <div>
                  <button>
                    <a className="Button23" href="www.facebook.com">
                      Submit
                    </a>
                  </button>
                </div>
              </form>
            </div>
            <div className="right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22370.215299338837!2d-73.777641!3d45.504504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93cd26550df3b%3A0x372ef64f98fc73bb!2s9524%20Boul%20Gouin%20O%2C%20Montr%C3%A9al%2C%20QC%20H8Y%201T9%2C%20Canada!5e0!3m2!1sen!2sus!4v1710657647731!5m2!1sen!2sus"
                width="500"
                height="470"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                title="Boul Gouin"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <img src={divider} className="dividerContact" alt="divider-img"></img>
          <section className="hidden">
            <h1
              style={{ fontSize: "2rem" }}
              id="ourRestroText"
              className="animate-text-OurRestro mt-5"
            >
              Open Hours
            </h1>
          </section>
          <p className="OpenHours mt-5">Tues - Sun Sun 11 AM - 10 PM</p>
          <section className="hidden">
            <h1
              style={{ fontSize: "2rem" }}
              id="ourRestroText"
              className="animate-text-OurRestro mt-5"
            >
              Happy Hours
            </h1>
          </section>
          <p className="EnjoyOff mt-5">Enjoy 50% Off</p>
          <section className="hidden" id="aboutText">
            <p className="animate-text-about HappyHours mt-5">
              Every Thursday, 4PM – 7PM
            </p>
          </section>
          <ScrollToTopButton />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
