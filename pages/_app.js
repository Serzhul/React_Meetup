import Router from "next/router";
import Layout from "../components/layout/Layout";
import Spinner from "../components/ui/Spinner";
import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  function routeChangeStart() {
    Router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });
  }

  function routeChangeComplete() {
    Router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });
  }

  useEffect(() => {
    routeChangeStart();
    routeChangeComplete();
  }, []);

  return (
    <Layout>
      {isLoading && <Spinner />}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
