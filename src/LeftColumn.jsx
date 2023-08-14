export function LeftColumn() {
    return (
        <>
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
                        <legend>NUTRITION FACTS</legend>
                        <p className="quantity">/ per serving</p>
                        {/* <h4>Ingredient 2-person | 4-person</h4> */}
                        <ul className="nutritionfacts">
                            <li>Calories</li>
                            <li>Fat</li>
                            <li>Saturated Fat</li>
                            <li>Carbohydrate</li>
                            <li>Sugar</li>
                            <li>Dietary Fiber</li>
                            <li>Protein</li>
                            <li>Cholesterol</li>
                            <li>Sodium</li>
                        </ul>
                        <p className="note">*Due to the different suppliers we purchase our products from, nutritional facts per meal can vary from the website to what is received in the delivered box, depending on your region.</p>
                    </fieldset>
                    <fieldset className="tips">
                        <legend>NOTES/TIPS</legend>
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