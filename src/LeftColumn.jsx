import { NutritionFacts } from "./NutritionFacts";

export function LeftColumn({ recipe }) {
  return (
    <>
      <div className="leftColumn">
        <fieldset className="border">
          <legend>
            <b>WHAT YOU'LL NEED</b>
          </legend>
          <ul className="list">
            {recipe.materials.map((material) => {
              return <li>{material}</li>;
            })}
          </ul>
        </fieldset>
        <NutritionFacts macros={recipe.macros} />
        <fieldset className="tips">
          <legend>
            <b>NOTES/TIPS</b>
          </legend>
          <ol>
            {recipe.notes.map((note) => {
              return <li>{note}</li>;
            })}
          </ol>
        </fieldset>
      </div>
    </>
  );
}
