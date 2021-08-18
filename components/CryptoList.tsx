import styled from "styled-components";
import Image from "next/image";

const MyCryptoList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CryptoItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 70%;
  color: var(--white);
  padding: 10px 0;
  border-bottom: 2px solid var(--black-light);
`;

const Container = styled.div`
  display: flex;

  .name-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 10px;

    &-name {
      font-weight: 400;
    }

    &-symbol {
      text-transform: uppercase;
      font-weight: 200;
    }
  }
`;

type CryptoProps = {
  crypto: any;
};

type ListProps = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
};

export default function CryptoList({ crypto }: CryptoProps) {
  return (
    <MyCryptoList>
      {crypto.map(
        ({
          id,
          symbol,
          name,
          image,
          current_price,
          price_change_percentage_24h,
          market_cap,
        }: ListProps) => {
          return (
            <CryptoItem key={id}>
              <Container>
                <Image src={image} alt={name} width={30} height={30} />
                <div className="name-container">
                  <h2 className="name-container-name">{name}</h2>
                  <p className="name-container-symbol">{symbol}</p>
                </div>
              </Container>
              <p>{`$${current_price}`}</p>
              <p>{`${price_change_percentage_24h} %`}</p>
              <p>{`$${market_cap}`}</p>
            </CryptoItem>
          );
        }
      )}
    </MyCryptoList>
  );
}
