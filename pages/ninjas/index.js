import Head from "next/head";
import styles from "../../styles/Sajjad.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import Link from "next/link";
// fetch data
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { sajjad: data },
  };
};

const Ninjas = ({ sajjad }) => {
  // const Ninjas = () => {
  // const [info, setInfo] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((user) => {
  //       setInfo(user);
  //       console.log(user.name);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  return (
    <Fragment>
      <Head>
        <title>Sajjad Listing</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <h1>All Sajjads</h1>
        {sajjad.map((data) => (
          <Link href={"/ninjas/" + sajjad.id} key={data.id}>
            <a className={styles.single}>
              <h3>{data.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default Ninjas;
