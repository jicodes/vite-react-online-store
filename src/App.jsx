import { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import MainHome from "./MainHome";
import MainMenu from "./MainMenu";
import MainDrinks from "./MainDrinks";
import MainAbout from "./MainAbout";
import MainCatering from "./MainCatering";

import "./App.css";

function App() {
  const [page, setPage] = useState("#/");
  const [subscriber, setSubscriber] = useState("");
  const [currentTheme, setCurrentTheme] = useState("light");

  const changeTheme = {
    toLight: () => setCurrentTheme("light"),
    toDark: () => setCurrentTheme("dark"),
  };

  useEffect(() => {
    onPopState();

    function onPopState() {
      if (document.location.hash !== "#main") {
        setPage(document.location.hash || "#/");
      }
    }

    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <div className="app" data-theme={currentTheme}>
      <a className="skip-to-content-link" href="#main">
        Skip to content
      </a>
      <Header setPage={setPage} />
      {page === "#/" && (
        <MainHome
          setPage={setPage}
          subscriber={subscriber}
          setSubscriber={setSubscriber}
        />
      )}
      {page === "#/menu" && <MainMenu setPage={setPage} />}
      {page === "#/drinks" && <MainDrinks />}
      {page === "#/about" && <MainAbout />}
      {page === "#/catering" && <MainCatering />}
      <Footer changeTheme={changeTheme} currentTheme={currentTheme} />
    </div>
  );
}

export default App;
