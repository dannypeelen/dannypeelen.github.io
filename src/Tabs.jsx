import React, { useState } from 'react';
import { StrictMode } from 'react';
import Home from '/src/Home.jsx';
import About from '/src/About.jsx';
import Extras from '/src/Extras.jsx';

export default function App() {
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavClick = (page, event) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  // Page components
  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (<StrictMode><Home /></StrictMode>);
      case "about":
        return (<StrictMode><About /></StrictMode>);
      case "extras":
        return (<StrictMode><Extras /></StrictMode>);
      default:
        return <h1>Page Not Found</h1>;
    }
  };

  return (
    <div>
      <nav class="navbar">
        <ul>
          <li><a href="index.html" onClick={(e) => handleNavClick("home", e)}>
            Danny Peelen
          </a></li>
          <li><a href="about.html" onClick={(e) => handleNavClick("about", e)}>
            About
          </a></li>

          <li><a href="extras.html" onClick={(e) => handleNavClick("extras", e)}>
            Extras
          </a></li>
        </ul>
      </nav>

      <div>{renderContent()}</div>

    <div class="bottom">
      <p>© 2024 Danny Peelen. All Rights Reserved</p>
    </div>
    </div>
  );
}
