import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import GlobalContext from './store/globalContext'
import { useContext } from 'react'
import FoodList from '@/components/FoodList'

export default function Home() {
  const globalCtx = useContext(GlobalContext)
  
    return (
          <FoodList/>
    )
  
}

