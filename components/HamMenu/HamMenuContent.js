import classes from './HamMenuContent.module.css'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import GlobalContext from '../../pages/store/globalContext'
import Link from 'next/link';

export default function HamMenuContent(props) {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter()
    let [popupToggle, setPopupToggle] = useState(false)

    if (globalCtx.theGlobalObject.hideHamMenu) {
        return null
    }

    function clicked(webAddress) {
        globalCtx.updateGlobals({ cmd: 'hideHamMenu', newVal: true })
        router.push(webAddress)
    }

    function closeMe() {
        globalCtx.updateGlobals({ cmd: 'hideHamMenu', newVal: true })
        if (popupToggle == true) {
            setPopupToggle(false)
        } else {
            setPopupToggle(true)
        }
    }
    function handleSignout() {
        globalCtx.updateGlobals({ cmd: 'signout' })
      }

    let contentJsx = <div className={classes.menuItem} onClick={() => clicked(item.webAddress)} ><p>Hello</p> </div>

    return (
        <div className={classes.background} onClick={() => closeMe()} >
            <div className={classes.mainContent} >
                <div className={classes.buttonDiv}>
                    <button onClick={() => closeMe()}> X</button>
                </div>
                <div className={classes.hamContent}>
                    {/* {contentJsx} */}
                    <div>
                        <Link href='/'> Home </Link>
                    </div>
                    <div>
                        <Link href='/input-food'> Add Food</Link>
                    </div>
                    <div className={classes.RecipeDiv}>
                        <Link href='/show-food'> Show Food</Link>
                    </div>
                    <div className={classes.RecipeDiv}>
                        <Link href='/show-recipe'> Show Recipes</Link>
                    </div>
                    <div className={classes.signout}>
            <button onClick={handleSignout}>Signout</button>
          </div>

                </div>

            </div>
        </div>
    );
}