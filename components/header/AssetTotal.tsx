import styled from "styled-components";
import Title from "../Title";

const MyAssetTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .asset-total {
    color: var(--white);
    font-size: 2rem;
  }
`;

export default function AssetTotal() {
  return (
    <MyAssetTotal>
      <Title title="$12,358" />
    </MyAssetTotal>
  );
}
