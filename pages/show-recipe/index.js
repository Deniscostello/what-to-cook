import { useRouter } from "next/router";
import GlobalContext from "../store/globalContext";
import { useContext } from "react";
import ShowRecipeList from "@/components/show-recipe/ShowRecipeList";

function ShowRecipePage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)
    if (globalCtx.theGlobalObject.dataLoaded == true) {
        if(globalCtx.theGlobalObject.foods){
        return (
            <ShowRecipeList recipes={globalCtx.theGlobalObject.recipes} />
        )
        }  else {
            return (
                <div>No food added. Please and food to view recipes you can make </div>
            )
        }

    }

    return (
        <div>No food added. Please and food to view recipes you can make</div>
    )
}

export default ShowRecipePage;