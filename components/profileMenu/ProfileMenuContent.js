import classes from './ProfileMenuContent.module.css'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import GlobalContext from '@/pages/store/globalContext'

export default function ProfileMenuContent(props) {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter()
    let [popupToggle, setPopupToggle] = useState(false)

    if (globalCtx.theGlobalObject.hideProfileMenu) {
        return null
    }

    function clicked(webAddress) {
        globalCtx.updateGlobals({ cmd: 'hideProfileMenu', newVal: true })
        router.push(webAddress)
    }

    function closeMe() {
        globalCtx.updateGlobals({ cmd: 'hideProfileMenu', newVal: true })
        if (popupToggle == true) {
            setPopupToggle(false)
        } else {
            setPopupToggle(true)
        }
    }

    let contentJsx = <div className={classes.menuItem} onClick={() => clicked(item.webAddress)} >Hello </div>

    return (
        <div className={classes.background} onClick={() => closeMe()} >
            <div className={classes.mainContent} >
                <div className={classes.profileHead}>
                <div className={classes.buttonDiv}>
                        <button onClick={() => closeMe()}> X</button>
                        </div>
                    <div className={classes.titleDiv}>
                        UserName
                    </div>
                    
                </div>
                <div className={classes.profileContent}>
                    {contentJsx}
                </div>
                <div className={classes.logoutDiv}>
                    Log Out
                </div>

            </div>
        </div>
    );
}
