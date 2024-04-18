import ShowFood from "@/components/show-food/ShowFood";
import { useRouter } from "next/router";
import GlobalContext from "../store/globalContext";
import { useContext } from "react";

function ShowFoodPage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)
    if (globalCtx.theGlobalObject.dataLoaded == true) {
        return (
            <ShowFood foods={globalCtx.theGlobalObject.foods} favRecipe = {globalCtx.theGlobalObject.favourites} />
        )
    }

    return (
        <div>Loading data from database</div>
    )
}

export default ShowFoodPage;