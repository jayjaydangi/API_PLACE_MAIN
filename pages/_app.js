import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import "./global.css";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../Components/store/store";
// import { Router } from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Fragment>
      <Head>
        <title>ApiStore</title>
        <link rel="icon" href="/content.svg" sizes="any" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps}/>
    </Fragment>
    </Provider>

  );
}

export default MyApp;
