import { createContext, useState, useEffect } from 'react'
import { useRouter } from "next/router"
const GlobalContext = createContext()

export function GlobalContextProvider(props) {
    const [globals, setGlobals] = useState({ aString: 'init val', count: 0, hideHamMenu: true, hideProfileMenu: true, foods: [], user: [], recipes: [], signInError: [], signUpError: [], favourites: [], dataLoaded: false })
    const router = useRouter()

    useEffect(() => {
        getAllFoods()
        getAllRecipes()
        getFavRecipes()
    }, []);

    async function getAllFoods() {
        const response = await fetch('/api/get-foods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json()
        if (response.ok) {
            console.log('Null')

            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                if (data.foods != null) {
                    console.log('dataFoods' + data.foods)
                    newGlobals.foods = data.foods;
                }
                newGlobals.dataLoaded = true;
                return newGlobals
            })

        }

    }

    async function getAllRecipes() {
        const response = await fetch('/api/get-recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json()
        if (response.ok) {
            if(data.recipes){
                console.log('new recipes')
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.recipes = []
                newGlobals.recipes = data.recipes;
                newGlobals.dataLoaded = true;
                return newGlobals
            })
        }
        }

    }

    async function getFavRecipes() {
        const response = await fetch('/api/get-fav-recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json();
        if (response.ok) {
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.favourites = data.FavRecipes;
                newGlobals.dataLoaded = true;
                return newGlobals
            })
        }

    }


    async function editGlobalData(command) {


        if (command.cmd == 'hideHamMenu') {
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.hideHamMenu = command.newVal; return newGlobals
            })
        }
        if (command.cmd == 'hideProfileMenu') {
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.hideProfileMenu = command.newVal; return newGlobals
            })
        }

        if (command.cmd == 'hideProfileMenu') {
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.hideProfileMenu = command.newVal; return newGlobals
            })
        }

        if (command.cmd == 'signInError') {
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.signInError = command.newVal; return newGlobals
            })
        }
        if (command.cmd == 'signUpError') {
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.signUpError = command.newVal; return newGlobals
            })
        }
        if (command.cmd == 'signout') {
            const response = await fetch('/api/signout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            await response.json();
            if (response.ok) {

                router.push('/signin');
            }
        }
        if (command.cmd == 'addFood') {
            const response = await fetch('/api/new-food', {
                method: 'POST',
                body: JSON.stringify(command.newVal),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            await getAllRecipes()
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals))
                newGlobals.foods.push(command.newVal.foodName); return newGlobals
            })

        }
        if (command.cmd == 'addFavRecipe') {
            const response = await fetch('/api/new-FavRecipe', {
                method: 'POST',
                body: JSON.stringify(command.newVal),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            //const data = await response.json();
            
        }
    }

    const context = {
        updateGlobals: editGlobalData,
        theGlobalObject: globals
    }

    return <GlobalContext.Provider value={context}>
        {props.children}
    </GlobalContext.Provider>
}


export default GlobalContext
