import { InfoColumn } from "./InfoColumn";
import { RecipeSteps } from "./RecipeSteps";

export function RecipePage() {
    return (
        <>
            <div className="RecipePage"></div>
            <InfoColumn />
            <RecipeSteps />
        </>
    );
}