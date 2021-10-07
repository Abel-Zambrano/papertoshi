import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

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
  return (
    <MySearchBar>
      <input className="search" type="text" />
      <div className="icon">
        <AiOutlineSearch />
      </div>
    </MySearchBar>
  );
}
