export function RecipesNew() {
  return (
    <div id="recipes-new">
      <h1>New recipe</h1>
      <form method="POST" action="http://localhost:3000/recipes.json">
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Chef: <input name="chef" type="text" />
        </div>
        <div>
          Image url: <input name="image_url" type="text" />
        </div>
        <div>
          Prep time: <input name="prep_time" type="text" />
        </div>
        <div>
          Ingredients: <input name="ingredients" type="text" />
        </div>
        <div>
          Directions: <input name="directions" type="text" />
        </div>
        <button type="submit">Create recipe</button>
      </form>
    </div>
  );
}
