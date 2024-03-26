/* The line `// import './App.css';` is a commented-out import statement in JavaScript. It is used to
import a CSS file named `App.css` into the current JavaScript file. However, since it is commented
out with `//`, it is not active and does not have any effect on the code execution. */
import "./App.css";
// import Dashboard from './components/dashboard/Dashboard';

// function App() {
//   return (
//     <div className="App">
//       <Dashboard/>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Gallary from "./components/Gallary/Gallary";
import About from "./components/about/About";
import Contact from "./components/contactUs/ContactUS";
import Home from "./components/home/Home";
import Sweets from "./components/sweets/Sweets";
import MenuCard from "./components/MenuCard/MenuCard";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/menu" element={<Menu />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/gallary" element={<Gallary />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/sweets" element={<Sweets />} />
      <Route exact path="/menucard/:itemId" element={<MenuCard />} />
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      {/* <div
        style={{
          display: "flex",
          background: "black",
          padding: "5px 0 5px 5px",
          fontSize: "20px",
        }}
      >
        <div style={{ margin: "10px" }}>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            About
          </NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            Menu
          </NavLink>
        </div>
        <div style={{ margin: "10px" }}>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            Contact
          </NavLink>
        </div>
      </div> */}
      {/* <MenuCard/> */}
      <Routing />
      {/* <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
