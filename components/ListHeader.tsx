import styled from "styled-components";
import PrimaryText from "./PrimaryText";

const MyListHeader = styled.tr`
  display: flex;
  border: 0.5px solid var(--gray);
  padding: 10px;
  width: 1000px;
  margin-top: 50px;

  .container {
    display: flex;
    align-items: center;
    width: 50px;

    .rank {
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0 20px 0 20px;
    }
  }

  .data-wrapper {
    display: flex;
    align-items: center;
    width: 237px;
    margin-left: 10px;
  }
`;

export default function ListHeader() {
  return (
    <MyListHeader>
      <td className="container">
        <p className="rank">#</p>
      </td>
      <td className="data-wrapper">
        <PrimaryText text="Name" />
      </td>
      <td className="data-wrapper">
        <PrimaryText text="Price" />
      </td>
      <td className="data-wrapper">
        <PrimaryText text="24hr" />
      </td>
      <td className="data-wrapper">
        <PrimaryText text="Market Cap" />
      </td>
    </MyListHeader>
  );
}
