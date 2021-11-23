import styled from "styled-components";
import { useDispatch } from "react-redux";
import { cancelConfirm, changeAmount, changeValue } from "../../actions/index";

const MyBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
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
  const dispatch = useDispatch();

  const handleExitModal = () => {
    closeModal();
    dispatch(cancelConfirm());
    dispatch(changeAmount(0));
    dispatch(changeValue(0));
  };

  return <MyBackdrop onClick={handleExitModal} />;
}
