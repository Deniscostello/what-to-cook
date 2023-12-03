import React, { useContext } from 'react'
import classes from './Navbar.module.css';
import { CgProfile } from 'react-icons/cg';
import HamMenu from '../HamMenu/HamMenu';
import HamMenuContent from '../HamMenu/HamMenuContent';
import ProfileMenu from '../profileMenu/ProfileMenu';
import ProfileMenuContent from '../profileMenu/ProfileMenuContent';
import { useRouter } from 'next/router';
import GlobalContext from '@/pages/store/globalContext';

function Navbar() {

  const globalCtx = useContext(GlobalContext)
  const router = useRouter()

  function toggleMenuHide() {
    globalCtx.updateGlobals({cmd: 'hideHamMenu', newVal: false})
  }

  function toggleProfileHide() {
    globalCtx.updateGlobals({cmd: 'hideProfileMenu', newVal: false})
  }


  const contents = [
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
  ]

  return (
    <div className={classes.App}>
    <header className={classes.HomepageHeader}>
        <HamMenuContent  />
        <HamMenu  toggleMenuHide={() => toggleMenuHide()}/>
      <p>What To Cook</p>
      {/* <div className={classes.profileDiv}><CgProfile /></div> */}
      <ProfileMenuContent />
      <ProfileMenu toggleProfileHide={() => toggleProfileHide()}/>
     
    </header>
  </div>
  )
}

     
    

export default Navbar;