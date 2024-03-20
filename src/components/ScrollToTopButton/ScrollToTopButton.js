// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import "./Scrolltotobuttonstyle.css"
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      const scrollPercent =
        ((document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100;
      if (scrollPercent > 1.5) { // Change the threshold to 30%
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', scrollFunction);

    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      className="scroll-to-top-button"
      style={{ display: isVisible ? "block" : "none",padding:"1.5vh 2vh" }}
      onClick={scrollToTop}
    >
      <IoIosArrowUp style={{ fontSize: "2rem",fontWeight:"900" }} />
    </button>
  );
}

export default ScrollToTopButton;
