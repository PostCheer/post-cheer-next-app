import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Post Cheer</title>
        <meta name="description" content="Make physical connection with a single click" />
      </Head>

      <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://www.postcheer.com">Post Cheer</a>!
          </h1>
        <p className={styles.description}>
          Get started by editing
        </p>
      </main>
    </div>
  )
}
