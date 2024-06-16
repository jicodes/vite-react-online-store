import breakfastEggUrl from './assets/breakfast-egg.jpg';
import breakfastPancakeUrl from './assets/breakfast-pancake.jpg';
import breakfastSandwichUrl from './assets/breakfast-sandwich.jpg';
import plateBeefUrl from './assets/plate-beef.jpg';
import plateCurryUrl from './assets/plate-curry.jpg';
import plateSpaghettiUrl from './assets/plate-spaghetti.jpg';
import tacoBeefUrl from './assets/taco-beef.jpg';
import tacoChickenUrl from './assets/taco-chicken.jpg';
import tacoSpicyUrl from './assets/taco-spicy.jpg';

const menuData = {
  "Breakfast": [
    {
      id: 1,
      name: 'Deluxe Egg & Sausage Breakfast',
      price: 10.99,
      url: breakfastEggUrl,
      alt: 'Lemon Kitchen Breakfast - Deluxe Egg & Sausage Breakfast',
      description: 'A mouthwatering breakfast with eggs, sausage, and more.',
    },
    {
      id: 2,
      name: 'Fluffy Pancake Delight',
      price: 12.99,
      url: breakfastPancakeUrl,
      alt: 'Lemon Kitchen Breakfast - Fluffy Pancake Delight',
      description: 'Indulge in a stack of fluffy pancakes served with coffee and cheese.',
    },
    {
      id: 3,
      name: 'Classic Sandwich Combo',
      price: 9.99,
      url: breakfastSandwichUrl,
      alt: 'Lemon Kitchen Breakfast - Classic Sandwich Combo',
      description: 'Classic golden-toasted artisanal bread embracing a medley of premium ingredients.',
    },
  ],
  "Plate": [
    {
      id: 4,
      name: 'Wine-Marinated Rare Beef',
      price: 18.99,
      url: plateBeefUrl,
      alt: 'Lemon Kitchen Plate Dish - Wine-Marinated Rare Beef',
      description: 'Tender and juicy beef marinated in wine for an exquisite taste.',
    },
    {
      id: 5,
      name: 'Spicy Curry & Bean Rice',
      price: 15.99,
      url: plateCurryUrl,
      alt: 'Lemon Kitchen Plate Dish - Spicy Curry & Bean Rice',
      description: 'A fiery combination of curry and flavorful bean rice.',
    },
    {
      id: 6,
      name: 'Tomato Sauce Spaghetti Delight',
      price: 14.99,
      url: plateSpaghettiUrl,
      alt: 'Lemon Kitchen Plate Dish - Tomato Sauce Spaghetti Delight',
      description: 'Savor the taste of perfectly cooked spaghetti in a rich tomato sauce.',
    },
  ],
  "Taco": [
    {
      id: 7,
      name: 'Hearty Beef Taco',
      price: 5.99,
      url: tacoBeefUrl,
      alt: 'Lemon Kitchen Taco - Hearty Beef Taco',
      description: 'A satisfying taco filled with tender beef and flavorful toppings.',
    },
    {
      id: 8,
      name: 'Flavorful Chicken Taco',
      price: 4.99,
      url: tacoChickenUrl,
      alt: 'Lemon Kitchen Taco - Flavorful Chicken Taco',
      description: 'Enjoy a burst of flavors with our delicious chicken taco.',
    },
    {
      id: 9,
      name: 'Spicy Taco Sensation',
      price: 3.99,
      url: tacoSpicyUrl,
      alt: 'Lemon Kitchen Taco - Spicy Taco Sensation',
      description: 'Experience the perfect balance of spice and flavor with our spicy taco.',
    },
  ],
};

export default menuData;