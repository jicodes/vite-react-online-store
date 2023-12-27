import "./Footer.css";

function Footer({ changeTheme, currentTheme }) {
  return (
    <footer className="footer">
      <div className="footer__links">
        <h3 className="link-title">Follow Us</h3>
        <ul className="link-list">
          <li className="link-item">
            <a
              href="https://www.facebook.com/federalistpig/"
              aria-label="Facebook"
            >
              <i className="icon-facebook"></i>
            </a>
          </li>
          <li className="link-item">
            <a
              href="https://www.instagram.com/federalistpig/"
              aria-label="Instagram"
            >
              <i className="icon-instagram"></i>
            </a>
          </li>
          <li className="link-item">
            <a
              href="https://www.instagram.com/osteria_60/"
              aria-label="Twitter"
            >
              <i className="icon-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__links">
        <h3 className="link-title">Change Theme</h3>
        <ul className="link-list">
          <li className="link-item">
            <button
              aria-label="Change to dark theme"
              className={`theme__button ${currentTheme === "dark" ? "theme__button--active" : ""}`}
              onClick={() => changeTheme.toDark()}
            >
              <i className="theme__icon--dark"></i>
            </button>
          </li>
          <li className="link-item">
            <button
              aria-label="Change to light theme"
              className={`theme__button ${currentTheme === "light" ? "theme__button--active" : ""}`}
              onClick={() => changeTheme.toLight()}
            >
              <i className="theme__icon--light"></i>
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
