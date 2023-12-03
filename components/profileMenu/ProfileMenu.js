import classes from './ProfileMenu.module.css'
import { CgProfile } from 'react-icons/cg';

export default function ProfileMenu(props) {
  return (
    <div className={classes.mainDiv} onClick={() => props.toggleProfileHide()}>
      <span className={classes.mainSpan}><CgProfile /></span>
    </div>
  )
}
