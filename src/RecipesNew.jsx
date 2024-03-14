/* eslint-disable react/prop-types */
export function RecipesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    props.onCreateRecipe(params);
    event.target.reset();
  };

  return (
    <div id="recipes-new">
      <h1>New recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          Title: <input className="form-control" name="title" type="text" />
        </div>
        <div className="mb-3">
          Chef: <input className="form-control" name="chef" type="text" />
        </div>
        <div className="mb-3">
          Image url: <input className="form-control" name="image_url" type="text" />
        </div>
        <div className="mb-3">
          Prep time: <input className="form-control" name="prep_time" type="text" />
        </div>
        <div className="mb-3">
          Ingredients: <input className="form-control" name="ingredients" type="text" />
        </div>
        <div className="mb-3">
          Directions: <input className="form-control" name="directions" type="text" />
        </div>
        <button className="btn btn-primary mb-3" type="submit">
          Create recipe
        </button>
      </form>
    </div>
  );
}
