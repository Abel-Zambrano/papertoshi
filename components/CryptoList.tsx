import styled from "styled-components";

const MyCryptoList = styled.div``;

type CryptoProps = {
  crypto: any;
};

type ListProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
};

export default function CryptoList({ crypto }: CryptoProps) {
  return (
    <MyCryptoList>
      <ul>
        {crypto.map(({ id, symbol, name, image, current_price }: ListProps) => {
          return (
            <li key={id}>
              <div>
                <h2>{symbol}</h2>
                <h3>{current_price}</h3>
                <img src={image} alt={name} />
              </div>
            </li>
          );
        })}
      </ul>
    </MyCryptoList>
  );
}
