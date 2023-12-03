import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import GlobalContext from './store/globalContext'
import { useContext } from 'react'

export default function Home() {
  const globalCtx = useContext(GlobalContext)
  // if (globalCtx.theGlobalObject.dataLoaded == true) {
    return (
      <>
        <Head>
          <title>What To Cook App</title>
          <meta name="description" content="What To Cook Project" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main className={`${styles.main} `}>
          <Layout />
        </main>
      </>
    )  


}
