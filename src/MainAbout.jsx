import aboutStory from "./assets/about-story.jpg";
import aboutChef from "./assets/about-chef.jpg";
import aboutFood from "./assets/about-food.jpg";
import aboutRestaurant from "./assets/about-restaurant.jpg";

import "./MainAbout.css";

function MainAbout() {
  return (
    <main className="main" id="main">
      <div className="panel">
        <img className="panel__image" src={aboutStory} alt="restaurant story" />
        <h2 className="panel__title">Our Story</h2>
        <p className="panel__text">
          Embark on a culinary journey with us, where passion meets flavor.  
        </p>
        <p className="panel__text">Born
          from a shared love for exquisite dining experiences, our story unfolds
          in every dish we serve.</p>
        <p className="panel__text">From humble beginnings to a culinary haven, we
          invite you to join us in creating lasting memories around the table.</p>
      </div>
      <div className="panel">
        <img className="panel__image" src={aboutChef} alt="chef portrait" />
        <h2 className="panel__title">Our Chef</h2>
        <p className="panel__text">
          Meet the maestro behind the magic - our exceptional chef, dedicated to
          crafting culinary masterpieces.
        </p>
        <p className="panel__text">With a blend of expertise and
          creativity, each dish is a testament to their commitment to
          perfection.</p>
        <p className="panel__text">Prepared with precision and served with flair, our
          chef&apos;s creations redefine the art of gastronomy.</p>
      </div>
      <div className="panel">
        <img className="panel__image" src={aboutFood} alt="seafood" />
        <h2 className="panel__title">Our Food</h2>
        <p className="panel__text">
          Indulge your senses in a symphony of flavors. Our menu is a curated
          selection of culinary delights, inspired by both tradition and
          innovation. 
        </p>
        <p className="panel__text">From the freshest ingredients to skillful preparation,
          each dish tells a story of taste and refinement. </p>
        <p className="panel__text">Explore a menu that
          celebrates diversity and promises a delightful culinary adventure.</p>
      </div>
      <div className="panel">
        <img
          className="panel__image"
          src={aboutRestaurant}
          alt="restaurant environment"
        />
        <h2 className="panel__title">Our Restaurant</h2>
        <p className="panel__text">
          Step into an atmosphere of warmth and hospitality. Our restaurant is
          not just a place to dine; it&apos;s a destination for those seeking an
          unparalleled dining experience.  
        </p>
        <p className="panel__text">Whether you&apos;re here for a casual
          meal or a special celebration, our inviting ambiance and attentive
          service ensure that every visit is a memorable occasion.</p>
        <p className="panel__text">Welcome to a
          culinary haven where every moment is savored.</p>
      </div>
    </main>
  );
}

export default MainAbout;