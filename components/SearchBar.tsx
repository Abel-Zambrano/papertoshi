import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import {
  focusActive,
  focusDeactive,
  searchCoin,
  clearSearch,
} from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { device } from "../JS/device";

const MySearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 540px;
  border-radius: 50px;
  background-color: var(--gray-light);

  @media ${device.tablet} {
    width: 360px;
  }

  &.focus-border {
    border: 1px solid var(--black-light);
  }

  .search {
    padding-left: 5px;
    width: 480px;
    height: 30px;
    border: none;
    font-size: 1.5rem;
    color: var(--gray);
    background-color: var(--gray-light);

    @media ${device.tablet} {
      width: 300px;
    }

    &.focus-text {
      color: var(--black-light);
    }
  }

  .search-icon {
    padding-left: 10px;
    display: flex;
    align-items: center;
    color: var(--gray);
    font-size: 2rem;
  }

  .cancel-icon {
    margin-right: 10px;
    display: flex;
    align-items: center;
    color: var(--gray);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export default function SearchBar() {
  const search = useSelector((state: any) => state.search);
  const searchFocus = useSelector((state: any) => state.searchFocus);
  const dispatch = useDispatch();

  const searchHandler = (e: any) => {
    dispatch(searchCoin(e.target.value));
  };

  const focusActiveHandler = () => {
    dispatch(focusActive());
  };

  const focusDeactiveHandler = () => {
    dispatch(clearSearch());
    dispatch(focusDeactive());
  };

  return (
    <MySearchBar className={`${searchFocus ? "focus-border" : null}`}>
      <div className="search-icon">
        <AiOutlineSearch />
      </div>
      <input
        className={`${searchFocus ? "search focus-text" : "search"}`}
        type="text"
        placeholder="Search Market"
        value={search}
        onChange={(e) => searchHandler(e)}
        onClick={focusActiveHandler}
      />
      {searchFocus ? (
        <div className="cancel-icon" onClick={focusDeactiveHandler}>
          <MdCancel />
        </div>
      ) : null}
    </MySearchBar>
  );
}
