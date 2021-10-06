import styled from "styled-components";

const MyBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  z-index: 500;
  top: 0;
  left: 0;
`;

type BackdropProps = {
  closeModal: any;
};

export default function Backdrop({ closeModal }: BackdropProps) {
  return <MyBackdrop onClick={closeModal} />;
}
