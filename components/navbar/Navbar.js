
import React, { useContext } from 'react'
import classes from './Navbar.module.css'
import HamMenu from '../HamMenu/HamMenu'
import HamMenuContent from '../HamMenu/HamMenuContent'
import GlobalContext from '@/pages/store/globalContext'
import Link from 'next/link'

function Navbar() {
  const globalCtx = useContext(GlobalContext)

  function toggleMenuHide() {
    globalCtx.updateGlobals({ cmd: 'hideHamMenu', newVal: false })
  }

  function toggleProfileHide() {
    globalCtx.updateGlobals({ cmd: 'hideProfileMenu', newVal: false })
  }

  function handleSignout() {
    globalCtx.updateGlobals({ cmd: 'signout' })
  }

  const contents = []
  globalCtx.theGlobalObject.user.forEach(element => {
    contents.push({ name: element.name, email: element.email })
  });



  return (
    <div className={classes.App}>
      <header className={`${classes.HomepageHeader} ${classes.ResponsiveHeader}`}>
        <div className={classes.hamMenu}>
          <HamMenuContent />
          <HamMenu toggleMenuHide={() => toggleMenuHide()} />
        </div>

          <div className={classes.Title}>
            <Link href='/'> What To Cook </Link>
          </div>

          <div className={classes.signout}>
            <button onClick={handleSignout}>Signout</button>
          </div>


      </header>
      <div className={classes.links}>
        <Link href='/input-food'>Add Food</Link>
        <Link href='/show-food'>Show Food</Link>
        <Link href='/show-recipe'>Show Recipes</Link>
      </div>
    </div>


    //




  )
}




export default Navbar;