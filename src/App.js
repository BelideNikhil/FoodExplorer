import "./styles.css";
import { useState } from "react";

let foodDb = {
  Egg: [
    {
      recipeName: "Egg Maggi Masala",
      recipeBy: "Sanjyot Keer",
      rating: "5/5"
    },
    {
      recipeName: "Scrambled Eggs",
      recipeBy: "Gordan Ramsay",
      rating: "4.75/5"
    },
    {
      recipeName: "Mushroom and Spinach Omelet",
      recipeBy: "David Bonam",
      rating: "4/5"
    }
  ],
  CheeseCake: [
    {
      recipeName: "Mango CheeseCake",
      recipeBy: "Sanjyot Keer",
      rating: "4.75/5"
    },
    {
      recipeName: "Pomegranate CheeseCake",
      recipeBy: "Ranveer Brar",
      rating: "4/5"
    },
    {
      recipeName: "Strawberry CheeseCake",
      recipeBy: "Kunal Kapoor",
      rating: "3/5"
    }
  ],
  Bread: [
    {
      recipeName: "Garlic Bread",
      recipeBy: "Sanjyot Keer",
      rating: "4/5"
    },
    {
      recipeName: "Mumbai Veg Grill Sandwich",
      recipeBy: "Sanjyot Keer",
      rating: "4/5"
    },
    {
      recipeName: "Veg Lasangna",
      recipeBy: "The Terrace Kitchen",
      rating: "3.5/5"
    }
  ]
};

let foodKeys = Object.keys(foodDb);

export default function App() {
  let [baseIngredient, setBaseIngredient] = useState("Egg");

  function callThisFunction(whole_argument) {
    setBaseIngredient(whole_argument);
  }
  return (
    <div className="container">
      <div className="App">
        <h1>Recipe Locker</h1>
        <h2>The ultimate guide on how to cook, eat and die!</h2>
        <div>
          {foodKeys.map((i) => {
            return (
              <button
                className="btn"
                key={i}
                onClick={() => callThisFunction(i)}>
                {i}
              </button>
            );
          })}
        </div>
        <div className="output">
          {foodDb[baseIngredient].map((each) => {
            return (
              <ul className="output-list" key={each.recipeName}>
                {/* getting value by .key */}
                <li className="name">{each.recipeName}</li>
                <li className="sub">{each.recipeBy}</li>
                <li className="sub">{each.rating}</li>
              </ul>
            );
          })}
        </div>
        <footer>
          <h4>Made by Nikhil Belide</h4>
          <ul>
            <li>
              <a href="https://twitter.com/Nikhil_Belide" target="_blank">
                TWITTER
              </a>
            </li>
            <li>
              <a
                href="https://github.com/BelideNikhil/RecipeLocker"
                target="_blank">
                GITHUB
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
