import { ExtraInfo } from "./ExtraInfo";
import { Ingredients } from "./Ingredients";

export function MainPage({ recipe }) {
  return (
    <>
      <div className="App">
        <navbar className="navbar">Way too Good</navbar>
        <div className="pageOne">
          <img className="photo" src={recipe.image} alt="Plated meal"></img>
          <div className="info">
            <div className="title">
              {recipe.title}
              <p className="subtitle">{recipe.subtitle}</p>
            </div>
            <Ingredients ingredients={recipe.ingredients} />
            <div className="extraInfo">
              <ExtraInfo extraInfo={recipe.extraInfo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
