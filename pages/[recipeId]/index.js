import RecipeDetail from '@/components/show-recipe/RecipeDetail'
import { useRouter } from 'next/router'
import GlobalContext from "../store/globalContext"
import { useContext } from 'react'

export default function () {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter();

    // Back to basics, a simple for loop. Also trim() comes into play as it usually does!
    let returnVal = null
    for (let ii = 0; ii < globalCtx.theGlobalObject.recipes.length; ii++) {
        let temp = globalCtx.theGlobalObject.recipes[ii];
        if (temp.recipeId == router.query.recipeId) {
            returnVal = <RecipeDetail title={temp.title} description={temp.description} url={temp.url} prepTime={temp.prepTime} cookTime={temp.cookTime} image={temp.image} ingredients={temp.ingredients} steps = {temp.steps} />
        }
    }
    // In the real world, we'd put the code above in the store context module. 
    return returnVal
}
