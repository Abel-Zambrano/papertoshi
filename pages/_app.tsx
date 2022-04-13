import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";
import "../styles/nprogress.css";
import allReducers from "../reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Script from "next/script";

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        {/* google analytics script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-X8ZYDP8K2F"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X8ZYDP8K2F');
        `}
        </Script>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
