import Head from "next/head";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>PayAPI</title>
        <meta
          name="description"
          content="Start building with our APIs for absolutely free."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
