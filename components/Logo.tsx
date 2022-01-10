import styled from "styled-components";
import { GiOctopus } from "react-icons/gi";
import { device } from "../JS/device";

const MyLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  padding: 8px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  color: var(--white);
  font-size: 3rem;
  background-color: var(--primary);

  @media ${device.phone} {
    height: 35px;
    width: 35px;
    font-size: 2.4rem;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  color: var(--black-light);
  margin-left: 10px;

  @media ${device.phone} {
    font-size: 2rem;
  }
`;

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <MyLogo className={className}>
      <IconWrapper>
        <GiOctopus />
      </IconWrapper>
      <Name>Papertoshi</Name>
    </MyLogo>
  );
}
