import ShowFood from "@/components/show-food/ShowFood";
import { useRouter } from "next/router";
import GlobalContext from "../store/globalContext";
import { useContext } from "react";

function ShowFoodPage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)
    console.log('show food index '+ globalCtx.theGlobalObject.foods )
    if (globalCtx.theGlobalObject.dataLoaded == true) {
        if(globalCtx.theGlobalObject.foods){
            return (
                <ShowFood foods={globalCtx.theGlobalObject.foods} favRecipe = {globalCtx.theGlobalObject.favourites} />
            )

        }
        else {
            return (
                <div>No food added</div>
            )
        }
    }

    return (
        <div>Loading data from database...</div>
    )
}

export default ShowFoodPage;