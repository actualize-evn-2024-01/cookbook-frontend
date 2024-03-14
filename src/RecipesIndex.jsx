/* eslint-disable react/prop-types */

export function RecipesIndex(props) {
  console.log("The props are", props);
  return (
    <div id="recipes-index">
      <h1>All recipes</h1>
      <p>The name is {props.name}</p>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {props.recipes.map((recipe) => (
          <div key={recipe.id} className="col">
            <div className="card">
              <img src={recipe.image_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">Chef: {recipe.chef}</p>
                <button className="btn btn-primary" onClick={() => props.onShowRecipe(recipe)}>
                  More info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
