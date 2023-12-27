import { useState } from "react";

import navMenu from "./nav-menu";

import "./Navbar.css";

function Navbar({ className, setPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOpenClass = isMenuOpen ? "" : "nav__list--hidden";

  function changePage(path) {
    window.history.pushState(null, "", path);
    setPage(path);
    setIsMenuOpen(false);
  }

  const list = navMenu.map((item) => {
    return (
      <li key={item.label} className="nav__item">
        <a
          href={item.path}
          className="nav__link"
          onClick={(e) => {
            e.preventDefault();
            changePage(item.path);
          }}
        >
          {item.label}
        </a>
      </li>
    );
  });

  return (
    <nav className={`nav ${className}`}>
      <button
        type="button"
        aria-label="Button to toggle the nav menu"
        className="nav__toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="nav__icon"></i>
      </button>
      <ul className={`nav__list ${menuOpenClass}`}>{list}</ul>
    </nav>
  );
}

export default Navbar;
