import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  cancelConfirm,
  changeAmount,
  changeValue,
  closeModal,
} from "../../actions/index";

const MyBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 500;
  top: 0;
  left: 0;
`;

type Props = {
  modalOpen: boolean;
  modalHandler: any;
};

export default function Backdrop({ modalOpen, modalHandler }: Props) {
  const dispatch = useDispatch();

  const handleExitModal = () => {
    modalHandler();
    document.body.style.overflow = "unset";
    dispatch(cancelConfirm());
    dispatch(changeAmount(0));
    dispatch(changeValue(0));
  };

  return <MyBackdrop onClick={handleExitModal} />;
}
