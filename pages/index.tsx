import Cryptos from "../components/Cryptos";
import Page from "../components/Page";
import allReducers from "../reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
);

export default function Home() {
  return (
    <>
      <Page>
        <Cryptos />
      </Page>
    </>
  );
}
