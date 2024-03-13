import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { Modal } from "./Modal";
import { RecipesShow } from "./RecipesShow";

export function Content() {
  let name = "PETER!!!";

  // let recipes = [];
  const [recipes, setRecipes] = useState([]);
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log("THE DATA FROM THE BACKEND: ", response);
      // recipes = response.data;
      setRecipes(response.data);
    });
  };

  const handleShowRecipe = (recipe) => {
    setIsRecipesShowVisible(true);
    setCurrentRecipe(recipe);
  };

  const handleCreateRecipe = (params) => {
    axios
      .post("http://localhost:3000/recipes.json", params)
      .then((response) => {
        console.log(response);
        // recipes.push(response.data);
        setRecipes([...recipes, response.data]);
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  const handleClose = () => {
    setIsRecipesShowVisible(false);
  };

  // handleIndexRecipes();
  useEffect(handleIndexRecipes, []);

  return (
    <main>
      <RecipesNew onCreateRecipe={handleCreateRecipe} />
      <RecipesIndex name={name} recipes={recipes} onShowRecipe={handleShowRecipe} />
      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        <RecipesShow recipe={currentRecipe} />
      </Modal>
    </main>
  );
}
