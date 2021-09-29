import styled from "styled-components";
import Link from "next/link";
import { GiOctopus } from "react-icons/gi";

const MySideBar = styled.div`
  width: 255px;
  min-height: 100vh;
  max-height: 100vh;
  background-color: var(--slate);
  position: sticky;
  top: 0;

  .papertoshi {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;

    &-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primary);
      border-radius: 50%;
      padding: 5px;

      .logo {
        color: var(--white);
        font-size: 2.5rem;
      }
    }

    &-title {
      font-size: 1.9rem;
      color: var(--gray);
      padding-left: 12px;
    }
  }
`;

export default function SideBar() {
  return (
    <MySideBar>
      <div className="papertoshi">
        <div className="papertoshi-wrapper">
          <GiOctopus className="logo" />
        </div>
        <h1 className="papertoshi-title">PaperToshi</h1>
      </div>
    </MySideBar>
  );
}
