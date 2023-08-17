import { NutritionFacts } from "./NutritionFacts";

export function LeftColumn({ recipe }) {
  return (
    <>
      <div className="leftColumn">
        {/* {recipe.map((materials, i) => {
          return (
            <ul className="list">
              <li>{materials[0]}</li>
              <li>{materials[1]}</li>
              <li>{materials[2]}</li>
              <li>{materials[3]}</li>
              <li>{materials[4]}</li>
              <li>{materials[5]}</li>
              <li>{materials[6]}</li>
            </ul>
          );
        })} */}
        <fieldset className="border">
          <legend>
            <b>WHAT YOU'LL NEED</b>
          </legend>
          <ul className="list">
            <li>Peeler</li>
            <li>Small Pot</li>
            <li>Baking Sheet</li>
            <li>Olive Oil (5 tsp | 10 tsp)</li>
            <li>Butter (3 tbsp | 5 tbsp)</li>
            <li>Large Skillet</li>
            <li>Whisk</li>
          </ul>
        </fieldset>
        <NutritionFacts macros={recipe.macros} />
        <fieldset className="tips">
          <legend>
            <b>NOTES/TIPS</b>
          </legend>
          <ol>
            <li>You got this!</li>
            <li>Don't give up!</li>
            <li>SUPER yum result!</li>
          </ol>
        </fieldset>
      </div>
    </>
  );
}
