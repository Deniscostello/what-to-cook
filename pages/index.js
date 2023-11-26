import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

export default function Home() {
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
