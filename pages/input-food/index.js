import AddFood from "@/components/AddFood/AddFood";
import { useRouter } from "next/router";
import GlobalContext from "../store/globalContext";
import { useContext } from "react";

function AddFoodPage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addFoodHandler(enteredFoodData)  {
        console.log(enteredFoodData)
        await globalCtx.updateGlobals({cmd: 'addFood', newVal: enteredFoodData})

        router.push('/');
    }
    return <AddFood onAddFood ={addFoodHandler} />
    // return <AddFood  />

}

export default AddFoodPage;