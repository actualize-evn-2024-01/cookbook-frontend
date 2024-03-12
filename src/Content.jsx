import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { Modal } from "./Modal";

export function Content() {
  let name = "PETER!!!";

  // let recipes = [];
  const [recipes, setRecipes] = useState([]);
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log("THE DATA FROM THE BACKEND: ", response);
      // recipes = response.data;
      setRecipes(response.data);
    });
  };

  const handleShowRecipe = () => {
    setIsRecipesShowVisible(true);
  };

  const handleClose = () => {
    setIsRecipesShowVisible(false);
  };

  // handleIndexRecipes();
  useEffect(handleIndexRecipes, []);

  return (
    <main>
      <RecipesNew />
      <RecipesIndex name={name} recipes={recipes} onShowRecipe={handleShowRecipe} />
      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
      </Modal>
    </main>
  );
}
