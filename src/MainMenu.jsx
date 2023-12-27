import { useState } from "react";

import menuData from "./menu-data";

import Button from "./Button";

import "./MainMenu.css";

function MainMenu({ setPage }) {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  return (
    <main className="main" id="main">
      <ul className="menu__tab-list">
        {Object.keys(menuData).map((category) => (
          <li key={category} className="menu__tab-item">
            <Button
              type="button"
              className={`menu__tab ${
                category === activeCategory ? "menu__tab--active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              <h2>{category}</h2>
            </Button>
          </li>
        ))}
      </ul>
      <Menu setPage={setPage} activeCategory={activeCategory} />
    </main>
  );
}

const Menu = ({ setPage, activeCategory }) => (
  <div>
    {Object.entries(menuData).map(([category, items]) => (
      <MenuCategory
        key={category}
        category={category}
        activeCategory={activeCategory}
        items={items}
        setPage={setPage}
      />
    ))}
  </div>
);

const MenuCategory = ({ category, activeCategory, items, setPage }) => (
  <div
    className={`menu__category ${
      category === activeCategory ? "menu__category--active" : ""
    }`}
  >
    <h2 className="menu__title">{category}</h2>
    <div className="menu__cards">
      {items.map((item) => (
        <MenuItem key={item.id} {...item} setPage={setPage} />
      ))}
    </div>
  </div>
);

const MenuItem = ({ name, price, url, alt, description, setPage }) => (
  <div className="card">
    <img src={url} alt={alt} className="card-image" />
    <h3 className="card-title"> {name} </h3>
    <span className="card-price"> ${price} </span>
    <p className="card-description">{description}</p>

    <Button
      type="button"
      visual="link"
      className="card-button"
      onClick={() => {
        window.history.pushState(null, "", "#/catering");
        setPage("#/catering");
      }}
    >
      Book Catering
    </Button>
  </div>
);

export default MainMenu;
