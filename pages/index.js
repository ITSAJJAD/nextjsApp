import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import NavBar from "../comps/NavBar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Sajjad List | Home</title>
        <meta name="keywords" content="sajjad" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello Next js</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit
          beatae temporibus ut quas blanditiis corporis unde, libero impedit
          ipsam aliquam voluptates sunt, doloribus necessitatibus maxime
          doloremque omnis! Quos, aspernatur.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit
          beatae temporibus ut quas blanditiis corporis unde, libero impedit
          ipsam aliquam voluptates sunt, doloribus necessitatibus maxime
          doloremque omnis! Quos, aspernatur.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Sajjad listing</a>
        </Link>
      </div>
    </Fragment>
  );
}
