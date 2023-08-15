import { NutritionFacts } from "./NutritionFacts";

export function LeftColumn() {
    return (
        <>
        <div className="leftColumn">
                    <fieldset className="border">
                        <legend><b>WHAT YOU'LL NEED</b></legend>
                        <ul>
                            <li>Peeler</li>
                            <li>Small Pot</li>
                            <li>Baking Sheet</li>
                            <li>Olive Oil (5 tsp|10 tsp)</li>
                            <li>Butter (3 tbsp|5 tbsp)</li>
                            <li>Large Pan</li>
                            <li>Whisk</li>
                        </ul>
                    </fieldset>
                    <NutritionFacts />
                    <fieldset className="tips">
                        <legend><b>NOTES/TIPS</b></legend>
                        <ul>
                            <li>you got this!</li>
                            <li>don't give up!</li>
                            <li>SUPER yum result!</li>
                        </ul>
                    </fieldset>
                </div>
        </>
    )
}