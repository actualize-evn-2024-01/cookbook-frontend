import axios from "axios";

export function RecipesNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/recipes.json", params)
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => console.log(error.response.data.errors));
  };

  return (
    <div id="recipes-new">
      <h1>New recipe</h1>
      <form onSubmit={handleSubmit}>
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
