import Head from "next/head";
import Image from "next/image";
import Navbar from "./navbar";

const name = "Joseph DeChicchis";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Joseph's personal website" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Navbar />
      <div className="p-4 mx-auto max-w-4xl">
        <main>{children}</main>
      </div>
    </>
  );
}

//className={styles.container}>
/*
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full"
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className="">
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      */
