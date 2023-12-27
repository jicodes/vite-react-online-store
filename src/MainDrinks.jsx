import Accordion from "./Accordion";

import drinksData from "./drinks-data";

import "./MainDrinks.css";

function MainDrinks() {
  return (
    <main className="main" id="main">
      <ul className="accordion">
        {Object.entries(drinksData).map(([category, drinks]) => (
          <Accordion
            key={category}
            heading={category}
            content={drinks}
          ></Accordion>
        ))}
      </ul>
    </main>
  );
}

export default MainDrinks;
