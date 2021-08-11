import styled from "styled-components";
import Title from "../Title";

const MyAssetTotal = styled.div`
  display: flex;
  justify-content: center;
`;

const CentsBox = styled.div`
  display: flex;
  margin-top: 3px;
  .cents {
    color: var(--white);
  }
`;

export default function AssetTotal() {
  return (
    <MyAssetTotal>
      <Title title="$12,358" />
      <CentsBox>
        <p className="cents">.10</p>
      </CentsBox>
    </MyAssetTotal>
  );
}
