import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://evaxhugdkc.execute-api.us-east-1.amazonaws.com/items", {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          price: price,
          name: name,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setId("");
        setPrice("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
           postcards with a few clicks. We are currently working on bringing this experience to life.
        </p>

        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          placeholder="ID"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>

        <h2 className={styles.subtitle}>About Us</h2>
        <p2 className={styles.description}>
          Hi, I&apos;m Sam Henderson, and I&apos;m the creator of PostCheer.com. 
          I&apos;m currently a CS student at Georgia Tech trying to help people make connections with 
          the people you appreciate by making it easy to send thoughtful individualized postcards with a
          few easy clicks. Accepted to Microsoft for Startups and AWS Activate.
        </p2>

        <h2 className={styles.subtitle}>Contact Us</h2>
        <p2 className={styles.description}>sam@postcheer.com</p2>
      </main>
    </div>
  )
}
