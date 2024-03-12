/* eslint-disable react/prop-types */
export function RecipesShow(props) {
  return (
    <div>
      <h2>{props.recipe.title}</h2>
      <p>Chef: {props.recipe.chef}</p>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Directions: {props.recipe.directions}</p>
    </div>
  );
}
