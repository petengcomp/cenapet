import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import 'animate.css';
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (

    <>
      <Head>
        <title>Cenapet</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
