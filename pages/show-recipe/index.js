import { useRouter } from "next/router";
import GlobalContext from "../store/globalContext";
import { useContext } from "react";
import ShowRecipeList from "@/components/show-recipe/ShowRecipeList";

function ShowRecipePage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)
    if (globalCtx.theGlobalObject.dataLoaded == true) {
        return (
            <ShowRecipeList recipes={globalCtx.theGlobalObject.recipes} />
        )
    }

    return (
        <div>Loading data from database</div>
    )
}

export default ShowRecipePage;