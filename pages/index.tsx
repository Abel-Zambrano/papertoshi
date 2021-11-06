import Cryptos from "../components/Cryptos";
import Page from "../components/Page";
import { createStore } from "redux";
import allReducers from "../reducers";

const store = createStore(allReducers);

export default function Home() {
  return (
    <>
      <Page>
        <Cryptos />
      </Page>
    </>
  );
}
