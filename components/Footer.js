import React from 'react'
import classes from './Footer.module.css';
import { GiKnifeFork } from 'react-icons/gi'
import { GoHome } from 'react-icons/go'
import { FiPlusCircle } from 'react-icons/fi'
import Link from 'next/link';

function Footer() {
  return (
       <div className={classes.HomepageFooter} >
          <div>
            <Link href='/'> <GoHome /> </Link>
            </div>
          <div>
            <Link href='/input-food'> <FiPlusCircle /></Link>
            </div>
          <div className={classes.RecipeDiv}>
            <Link href='/show-food'> <GiKnifeFork /></Link> 
            </div>
        </div>
  )
}

export default Footer;