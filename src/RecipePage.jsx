import { LeftColumn } from "./LeftColumn";
import { RightColumn } from "./RightColumn";

export function RecipePage() {
    return (
        <>
            <div className="page">
                <LeftColumn />
                <RightColumn />
            </div>
        </>
    )
}