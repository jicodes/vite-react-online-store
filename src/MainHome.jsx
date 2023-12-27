import { useRef } from "react";

import Carousel from "./Carousel";
import Button from "./Button";
import Modal from "./Modal";

import menuData from "./menu-data";

import "./MainHome.css";

function MainHome({ setPage, subscriber, setSubscriber }) {
  const menuItems = Object.values(menuData).flat();
  const modalRef = useRef();

  return (
    <main className="main" id="main">
      <h2 className="home__title">Our Menu</h2>
      <Button
        type="button"
        visual="link"
        className="home__see-menu"
        onClick={() => {
          window.history.pushState(null, "", "#/menu");
          setPage("#/menu");
        }}
      >
        See Full Menu
      </Button>
      <Carousel items={menuItems} />
      {subscriber ? (
        <p className="home__newsletter--subscribed">
          Congratulations
          <span> {subscriber} </span>
          you have subscribed successfully!
        </p>
      ) : (
        <p className="home__newsletter">
          Want to know more?
          <Button
            type="button"
            visual="link"
            onClick={() => modalRef.current.showModal()}
            className="home__subscribe"
          >
            Subscribe
          </Button>
          to our newsletter.
        </p>
      )}
      <Modal modalRef={modalRef} setSubscriber={setSubscriber} />
    </main>
  );
}

export default MainHome;
