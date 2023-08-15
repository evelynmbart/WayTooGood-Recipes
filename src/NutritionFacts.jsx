export function NutritionFacts() {
    return (
        <>
            <fieldset className="border">
                <legend><b>NUTRITION FACTS</b></legend>
                    <p className="quantity">/ per serving</p>
                    <div className="nutritionfacts">
                        <div className="macros">
                            <div>Calories</div>
                            <div>Fat</div>
                            <div>Saturated Fat</div>
                            <div>Carbohydrate</div>
                            <div>Dietary Fiber</div>
                            <div>Protein</div>
                            <div>Cholesterol</div>
                            <div>Sodium</div>
                        </div>
                        <div>
                            <div>680 kcal</div>
                            <div>28 g</div>
                            <div>10 g</div>
                            <div>63 g</div>
                            <div>19 g</div>
                            <div>45 g</div>
                            <div>150 mg</div>
                            <div>410 mg</div>
                        </div>
                    </div>
                    <p className="note">*Due to the different suppliers we purchase our products from, nutritional facts per meal can vary from the website to what is received in the delivered box, depending on your region.</p>
            </fieldset>
        </>
    )
}