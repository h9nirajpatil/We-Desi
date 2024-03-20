import React, { useState, useEffect } from "react";
import "./StickyButtonstyle.css";

//Component Function:
function StickyButton() {
  //State Initialization:It initializes the state using the useState hook. It declares a state variable showButton to check the visibility of the button. Initially, it is set to false, indicating that the button is not shown.
  const [showButton, setShowButton] = useState(false);

  //Effect Hook:It uses the useEffect hook to create a side effect on the component. These results are fired after the object is submitted for the first time (passed as a dependency array, meaning only once).
  useEffect(() => {
    const scrollFunction = () => {
      const scrollPercent =
        //Calculate the scroll percentage based on the current scroll position relative to the overall sheet height.
        ((document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100;
      //If the scroll percentage is greater than 0.8 (80% of the page scrolled), it sets showButton state to true, indicating that the button should be displayed. Otherwise, it sets it to false.
      if (scrollPercent > 0.8) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    //Event Listener Addition and Removal:
    window.addEventListener("scroll", scrollFunction); //Adds a scroll event listener to the window, calling scrollFunction when the user scrolls.

    return () => {
      window.removeEventListener("scroll", scrollFunction); //Removes the event listener when the component is unmounted to avoid memory leaks.
    };
  }, []);

  return (
    //Button Rendering:
    <a
      href="/"
      id="stickyBtn"
      className="sticky-button"
      style={{ display: showButton ? "block" : "none" }}
      onClick={() => {
        // Do something when the button is clicked, e.g., scroll to a specific section
      }}
    >
      Main Menu
    </a>
    /*Renders a button element with the following attributes:
id: "stickyBtn"
className: "sticky-button"
style: Determines whether the button is displayed (showButton state controls this).
onClick: An empty arrow function for handling click events. You can add functionality here, such as scrolling to a specific section. */
  );
}
export default StickyButton;
