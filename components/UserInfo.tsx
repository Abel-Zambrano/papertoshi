import styled from "styled-components";
import { device } from "../JS/device";

const MyUserInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 33.8px;
  flex: 1;
  margin-right: 50px;

  @media ${device.tablet} {
    display: none;
  }

  .user-info {
    display: flex;
    align-items: center;
    height: 100%;
    border-left: 2px solid var(--gray);
    padding-left: 20px;

    &__name {
      font-size: 1.6rem;
    }
  }
`;

export default function UserInfo() {
  return (
    <MyUserInfo>
      <div className="user-info">
        <p className="user-info__name">
          Welcome, <strong>Abel Zambrano</strong>!
        </p>
      </div>
    </MyUserInfo>
  );
}
