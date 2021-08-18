import styled from "styled-components";
import Image from "next/image";

const MyCryptoList = styled.div``;

type CryptoProps = {
  crypto: any;
};

type ListProps = {
  id: string;
  symbol: string;
  name: string;
  image: any;
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
                <Image src={image} alt={name} />
              </div>
            </li>
          );
        })}
      </ul>
    </MyCryptoList>
  );
}
