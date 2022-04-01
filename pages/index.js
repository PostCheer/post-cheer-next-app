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
          We strive to help you connect with the people you appreciate by allowing you to send individualized
           post cards with a few clicks.
        </p>
        <h2 className={styles.subtitle}>About Us</h2>
        <p2 className={styles.description}>
          Hi, I&apos;m Sam Henderson, and I&apos;m the creator of PostCheer.com. 
          I&apos;m currently a CS student at Georgia Tech trying to help people make connections with 
          the people you appreciate by making it easy to send thoughtful individualized post cards with a
          few easy clicks.
        </p2>

        <h2 className={styles.subtitle}>Contact Us</h2>
        <p2 className={styles.description}>sam@postcheer.com</p2>
      </main>
    </div>
  )
}
