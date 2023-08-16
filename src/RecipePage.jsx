import { LeftColumn } from "./LeftColumn";
import { RightColumn } from "./RightColumn";

export function RecipePage({ recipe }) {
    return (
        <>
            <div className="pageTwo">
                <LeftColumn recipe={recipe} />
                <RightColumn steps={recipe.steps}/>
            </div>
        </>
    )
}