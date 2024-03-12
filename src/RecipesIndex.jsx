/* eslint-disable react/prop-types */

export function RecipesIndex(props) {
  console.log("The props are", props);
  return (
    <div id="recipes-index">
      <h1>All recipes</h1>
      <p>The name is {props.name}</p>
      <div className="cards">
        {props.recipes.map((recipe) => (
          <div key={recipe.id} className="recipes card">
            <img src={recipe.image_url} alt="" />
            <div className="card-body">
              <h2>{recipe.title}</h2>
              <p>Chef: {recipe.chef}</p>
              <button onClick={() => props.onShowRecipe(recipe)}>More info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
