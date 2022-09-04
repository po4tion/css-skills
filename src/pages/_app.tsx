import type { AppProps } from "next/app";
import GlobalStyle from "~/components/GlobalStyle";
import "~/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
