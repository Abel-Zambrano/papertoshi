import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  cancelConfirm,
  changeAmount,
  changeValue,
  closeModal,
} from "../../actions/index";
import { device } from "../../JS/device";

const MyBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
  z-index: 500;
  top: 0;
  left: 0;
  /* @media ${device.phone} {
    display: none;
  } */
`;

export default function Backdrop() {
  const dispatch = useDispatch();

  const handleExitModal = () => {
    dispatch(closeModal());
    dispatch(cancelConfirm());
    dispatch(changeAmount(0));
    dispatch(changeValue(0));
  };

  return <MyBackdrop onClick={handleExitModal} />;
}
