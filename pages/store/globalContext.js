import { createContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

export function GlobalContextProvider(props) {
    const [globals, setGlobals] = useState({ aString: 'init val', count: 0, hideHamMenu: true, hideProfileMenu: true, foods: [], user: [], recipes: [],  dataLoaded: false })

    useEffect(() => {
        getAllFoods()
    }, []);

    useEffect(() => {
        getAllUsers()
    }, []);

    useEffect(() => {
        getAllRecipes()
    }, []);

    async function getAllFoods() {
        const response = await fetch('/api/get-foods', {
            method: 'POST',
            body: JSON.stringify({ foods: 'all' }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json();
        setGlobals((previousGlobals) => { 
            const newGlobals = JSON.parse(JSON.stringify(previousGlobals)); 
            newGlobals.foods = data.foods; 
            newGlobals.dataLoaded = true; 
            return newGlobals 
        })
        
    }

    async function getAllRecipes() {
        const response = await fetch('/api/get-recipe', {
            method: 'POST',
            body: JSON.stringify({ recipes: 'all' }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json();
        setGlobals((previousGlobals) => { 
            const newGlobals = JSON.parse(JSON.stringify(previousGlobals)); 
            newGlobals.recipes = data.recipes; 
            newGlobals.dataLoaded = true; 
            return newGlobals 
        })
        
    }

    async function getAllUsers() {
        const response = await fetch('/api/get-user', {
            method: 'POST',
            body: JSON.stringify({ user: 'all' }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json();
        setGlobals((previousGlobals) => { 
            const newGlobals = JSON.parse(JSON.stringify(previousGlobals)); 
            newGlobals.user = data.user; 
            newGlobals.dataLoaded = true; 
            return newGlobals 
        })
        
    }


    async function editGlobalData(command) { // {cmd: someCommand, newVal: 'new text'}
        if (command.cmd == 'hideHamMenu') { // {cmd: 'hideHamMenu', newVal: false} 
            //  WRONG (globals object reference doesn't change) and react only looks at its 'value' aka the reference, so nothing re-renders:
            //    setGlobals((previousGlobals) => { let newGlobals = previousGlobals; newGlobals.hideHamMenu = command.newVal; return newGlobals })
            // Correct, we create a whole new object and this forces a re-render:
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
        if (command.cmd == 'addFood') {
            // const response = await fetch('/api/new-food', {
            //     method: 'POST',
            //     body: JSON.stringify(command.newVal),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });
            // const data = await response.json(); 
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals))
                newGlobals.foods.push(command.newVal); return newGlobals
            })
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
