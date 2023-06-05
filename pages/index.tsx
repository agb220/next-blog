import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import kherson from "../public/assets/herson_-1.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXT Blog</title>
        <meta name="title" content="NEXT BLOG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.container}>
        <h1 className={`${styles.title} font-effect-anaglyph`}>
          Головна сторінка
        </h1>
        <div className={styles.mainImage}>
          <Image src={kherson} alt={"kherson"} width={400} height={300} />
        </div>
        <p className={styles.text}>
          Херсонщина – це справжня перлина степового краю України. Її оспівували
          у віршах, її малювали і складали про неї пісні.
        </p>
        <p className={styles.text}>
          Обов'язково відвідайте та відкрийте для себе нові місця та розкажіть
          про них нам!
        </p>
      </main>
    </>
  );
}
