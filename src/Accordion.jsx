import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  const accordionContentClass = isActive ? "accordion__content--active" : "";
  const accordionToggleClass = isActive ? "accordion__toggle--active" : "";

  return (
    <li key={heading} className="accordion__item">
      <button
        type="button"
        aria-label={`Toggle ${heading} accordion`}
        className={`accordion__toggle ${accordionToggleClass}`}
        onClick={() => setIsActive(!isActive)}
      >
        <h2> {heading} </h2>
        <span className="accordion__active-indicator">
          {isActive ? "-" : "+"}
        </span>
      </button>

      <div className={`accordion__content ${accordionContentClass}`}>
        <div className="accordion__content--overflow">
          {content.map((item) => (
            <p key={item.id}>
              {item.brand}, {item.details}, <span> ${item.price} </span>
            </p>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Accordion;
