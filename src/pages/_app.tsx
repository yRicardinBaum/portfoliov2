import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import {useEffect, useState} from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
        <>
            <Head>
                <title>Ricardo Marinho - Portfólio</title>
                <link rel="shortcut icon" href="/images/sesi_icon.ico"/>
            </Head>

          <Component {...pageProps} />
        </>
    );
  }
}
