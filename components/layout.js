import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "MR-Addict";
export const siteTitle = "Next.js Sample Website";

const getBasePath = () => {
  let basePath = "";
  if (process.env.GITHUB_ACTIONS) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
    basePath = `/${repo}`;
  }
  return basePath;
};

export default function Layout({ children, home }) {
  const basePath = getBasePath();
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href={`${basePath}/favicon.ico`} />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <>
          <Image
            src={`${basePath}/images/avatar.webp`}
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt='avatar'
          />
          <h2 className={utilStyles.headingLg}>
            <Link href='/' className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        </>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
    </div>
  );
}
