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

            {/* <div>
              <img
                className="ingredientimages"
                src="https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/554a363df8b25e1d268b456b-15867d90.png"
                alt="Garlic"
              />
              <p className="food">Garlic</p>
            </div>
            <div>
              <img
                className="ingredientimages"
                src="https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/565dc53979a23c31668b4567-fe08fd79.png"
                alt="Coucous"
              />
              <p className="food">Couscous</p>
            </div>
            <div>
              <img
                className="ingredientimages"
                src="https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/image/554a2efafd2cb9ce488b4567.png"
                alt="Chicken breast"
              />
              <p className="food">Chicken Breast</p>
            </div>
            <div>
              <img
                className="ingredientimages"
                src="https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/5632315bf8b25e5a138b4568-07f14295.png"
                alt="Chicken stock"
              />
              <p className="food">Chicken Stock</p>
            </div>
            <div>
              <img
                className="ingredientimages"
                src="https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/image/554a3879fd2cb9ba4f8b456a.png"
                alt="Balsamic vinegar"
              />
              <p className="food">Balsamic Vinegar</p>
            </div>
            <div>
              <img
                className="ingredientimages"
                src="https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/image/58012ab5bfba3d61a60318e3-cba2e1ed.png"
                alt="Cherry jam"
              />
              <p className="food">Cherry Jam</p>
            </div>
            <div>
              <img
                className="ingredientimages"
                src="https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/554a301f4dab71626c8b4569-015d8d9b.png"
                alt="Scallion"
              />
              <p className="food">Scallions</p>
            </div>
            <div>
              <img
                className="ingredientimages"
                src="https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/5fbc1be7feb8473c1d2230a2-c932e679.png"
                alt="Sliced almonds"
              />
              <p className="food">Sliced Almonds</p>
            </div> */}
          </div>
        </fieldset>
      </div>
    </>
  );
}
