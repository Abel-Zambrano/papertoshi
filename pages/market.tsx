import CryptoList from "../components/CryptoList";
import Page from "../components/Page";
import { useSelector, useDispatch } from "react-redux";
import { searchTerm } from "../actions";

const dispatch = useDispatch();
const search = useSelector((state: any) => state.search);

export default function Market() {
  return (
    <Page>
      <CryptoList />
    </Page>
  );
}
