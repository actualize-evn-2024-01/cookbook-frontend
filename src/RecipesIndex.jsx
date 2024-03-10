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
            <h2>{recipe.title}</h2>
            <img src={recipe.image_url} alt="" />
            <p>Chef: {recipe.chef}</p>
            <button>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
