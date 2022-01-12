import styled from "styled-components";
import MobileLinks from "./MobileLinks";

const MyMobileNavMenu = styled.div`
  position: absolute;
  display: none;
  justify-content: center;
  width: 100vw;
  height: 0;
  background-color: var(--primary);
  transition: all 600ms ease-in-out;
  z-index: 5000;

  &.visible {
    display: flex;
    height: 100%;
  }
`;

type Props = {
  className: string;
};

export default function MobileNavMenu({ className }: Props) {
  return (
    <MyMobileNavMenu className={className}>
      <MobileLinks />
    </MyMobileNavMenu>
  );
}
