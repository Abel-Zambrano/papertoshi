import styled from "styled-components";
import NavLinks from "./NavLinks";
import { GiOctopus } from "react-icons/gi";

const MySideBar = styled.div`
  width: 230px;
  min-width: 230px;
  min-height: 100vh;
  max-height: 100vh;
  background-color: var(--slate);
  position: sticky;
  top: 0;

  .heading {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin-top: 20px;

    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primary);
      border-radius: 50%;
      padding: 5px;
      margin-left: 20px;
    }

    &__logo {
      color: var(--white);
      font-size: 2.5rem;
    }

    &__title {
      font-size: 1.9rem;
      color: var(--gray);
      margin-left: 12px;
    }
  }
`;

const HR = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export default function SideBar() {
  return (
    <MySideBar>
      <div className="heading">
        <div className="heading__wrapper">
          <GiOctopus className="heading__logo" />
        </div>
        <h1 className="heading__title">PaperToshi</h1>
      </div>
      <NavLinks />
      <HR />
    </MySideBar>
  );
}
