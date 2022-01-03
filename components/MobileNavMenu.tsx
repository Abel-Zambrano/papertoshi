import styled from "styled-components";
import MobileLinks from "./MobileLinks";

const MyMobileNavMenu = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 0;
  background-color: var(--primary);
  visibility: hidden;
  transition: all 600ms ease-in-out;
  z-index: 5000;

  &.visible {
    visibility: visible;
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
