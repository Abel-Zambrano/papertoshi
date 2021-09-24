import styled from "styled-components";

const MyBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 500;
  top: 0;
`;

type BackdropProps = {
  children: any;
};

export default function Backdrop({ children }: BackdropProps) {
  return <MyBackdrop>{children}</MyBackdrop>;
}