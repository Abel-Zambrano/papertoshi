import styled from "styled-components";
import PrimaryText from "./PrimaryText";
import { device } from "../JS/device";

const MyListHeader = styled.thead`
  .header-row {
    display: flex;
    border: 0.5px solid var(--gray);
    padding: 10px;
    width: 1000px;
    margin-top: 50px;

    @media ${device.tablet} {
      width: 100vw;
      margin-top: 0;
      padding: 10px 0 10px 0;
      border-left: none;
      border-right: none;
    }
  }

  .container {
    display: flex;
    align-items: center;
    width: 50px;

    &.hidden {
      @media ${device.phone} {
        display: none;
      }
    }

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

    @media ${device.phone} {
      justify-content: center;
    }

    &.hidden {
      @media ${device.phone} {
        display: none;
      }
    }
  }
`;

export default function ListHeader() {
  return (
    <MyListHeader>
      <tr className="header-row">
        <td className="container hidden">
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
        <td className="data-wrapper hidden">
          <PrimaryText text="Market Cap" />
        </td>
      </tr>
    </MyListHeader>
  );
}
