import styled from "styled-components";
import TableLabel from "./TableLabel";

const MyTableHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 100%;

    @media screen and (max-width: 500px) {
      width: 95%;
    }
  }
`;

const StyledTableLabel = styled(TableLabel)`
  &.mobile-hidden {
    @media screen and (max-width: 750px) {
      display: none;
    }
  }
`;

export default function TableHeader() {
  return (
    <MyTableHeader>
      <div className="container">
        <TableLabel content="Name" />
        <TableLabel content="Price" />
        <TableLabel content="Change" />
        <StyledTableLabel className="mobile-hidden" content="Market Cap" />
      </div>
    </MyTableHeader>
  );
}
