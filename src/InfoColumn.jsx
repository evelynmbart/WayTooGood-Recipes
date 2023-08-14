export function InfoColumn() {
    return (
        <>
            <div className="infoColumn">
                <div className="leftColumn">
                    <fieldset className="border">
                        <legend>WHAT YOU'LL NEED</legend>
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
                    <fieldset className="border">
                        <legend>INGREDIENTS</legend>
                        <h4>Ingredient 2-person | 4-person</h4>
                        <ul className="ingredientMeasurements">
                            <li>Chicken Breasts*</li>
                            <li>Israeli Couscous</li>
                            <li>Carrots</li>
                            <li>Garlic</li>
                            <li>Chicken Stock</li>
                            <li>Balsamic Vinegar</li>
                            <li>Cherry Jam</li>
                            <li>Scallions</li>
                            <li>Sliced Almonds</li>
                        </ul>
                    </fieldset>
                    <p className="measurements">* Chicken is fully cooked when internal temperature reaches 165 degrees.</p>
                    <fieldset className="border">
                        <legend>NOTES/TIPS</legend>
                    </fieldset>
                </div>
            </div>
        </>
    )
}