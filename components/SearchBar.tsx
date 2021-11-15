import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { searchCoin } from "../actions";
import { useDispatch } from "react-redux";

const MySearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 540px;

  .search {
    width: 500px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid var(--gray);
    text-align: right;
    font-size: 2rem;
    padding-right: 10px;
  }

  .icon {
    display: flex;
    align-items: center;
    color: var(--gray);
    font-size: 2rem;
  }
`;

export default function SearchBar() {
  const dispatch = useDispatch();

  const searchHandler = (e: any) => {
    dispatch(searchCoin(e.target.value));
  };

  return (
    <MySearchBar>
      <input
        className="search"
        type="text"
        placeholder="Search Crypto"
        onChange={(e) => searchHandler(e)}
      />
      <div className="icon">
        <AiOutlineSearch />
      </div>
    </MySearchBar>
  );
}
