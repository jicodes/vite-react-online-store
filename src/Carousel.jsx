import { useState } from "react";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="carousel">
      <button className="image-prev" onClick={prevImage}>&lt;</button>
      <ul className="image-list">
        {items.map((items, index) => {
          const isActive = currentIndex === index ? "active" : "";
          return (
            <li key={items.alt} className={`image-item ${isActive}`}>
              <img src={items.url} alt={items.alt} />
            </li>
          );
        })}
      </ul>
      <button className="image-next" onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default Carousel;