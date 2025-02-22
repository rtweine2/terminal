import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Layout } from '../components/layout';
import '../styles/global.css';
import { ShellProvider } from '../utils/shellProvider';
import { ThemeProvider } from '../utils/themeProvider';

export default function App({ Component, pageProps }) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    localStorage.setItem('visitedAt', new Date().toString());
  }, []);

  return (
    <>
      <ThemeProvider>
        <ShellProvider>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
              key="viewport"
            />
          </Head>

          <Layout onClick={onClickAnywhere}>
            <Component {...pageProps} inputRef={inputRef} />
          </Layout>
        </ShellProvider>
      </ThemeProvider>
      <Analytics />
    </>
  );
}
