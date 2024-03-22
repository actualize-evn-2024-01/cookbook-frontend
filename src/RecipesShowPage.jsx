import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function RecipesShowPage() {
  const [recipe, setRecipe] = useState({});
  const params = useParams();

  const handleShowRecipe = () => {
    axios.get(`http://localhost:3000/recipes/${params.id}.json`).then((response) => {
      console.log(response);
      setRecipe(response.data);
    });
  };

  useEffect(handleShowRecipe, []);

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image_url} alt="" width="300px" />
      <p>Chef: {recipe.chef}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Directions: {recipe.directions}</p>
      <Link to="/recipes">Back to all recipes</Link>
    </div>
  );
}
