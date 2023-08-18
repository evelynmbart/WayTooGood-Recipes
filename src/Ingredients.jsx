export function Ingredients({ ingredients }) {
  return (
    <>
      <div>
        <fieldset className="border">
          <legend>
            <b>INGREDIENTS</b>
          </legend>
          <div className="ingredients">
            {ingredients.map((ingredient) => {
              return (
                <div>
                  <img
                    className="ingredientimages"
                    src={ingredient.image}
                    alt="Carrots"
                  />
                  <p className="food">{ingredient.name}</p>
                </div>
              );
            })}
          </div>
        </fieldset>
      </div>
    </>
  );
}
