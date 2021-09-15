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
  background-color: var(--white);
  list-style: none;
  width: 540px;
  height: 200px;
  border-radius: 10px;
  margin: 5px 0;

  .crypto-heading {
    background-color: aliceblue; //todo: remove
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    margin: 10px 0 0 10px;

    .logo {
      border-radius: 50%;
    }
  }
`;

type CryptoProps = {
  crypto: any;
};

type ListProps = {
  id: string;
  name: string;
  image: string;
  current_price: any;
  price_change_percentage_24h: number;
  market_cap: number;
};

export default function CryptoList({ crypto }: CryptoProps) {
  // format API value to whole USD
  const wholeFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

  // format API value to USD
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <MyCryptoList>
        {crypto.map(
          ({
            id,
            name,
            image,
            current_price,
            price_change_percentage_24h,
            market_cap,
          }: ListProps) => {
            let currentPrice = formatter.format(current_price);
            // format API percent change to 2 place decimal
            let priceChange24h = Number(
              price_change_percentage_24h / 100
            ).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 2,
            });
            let marketCap = wholeFormatter.format(market_cap);
            return (
              <CryptoItem key={id}>
                <div className="crypto-heading">
                  <Image
                    className="logo"
                    src={image}
                    alt={name}
                    width={30}
                    height={30}
                  />
                  <h4>{name}</h4>
                </div>
              </CryptoItem>
            );
          }
        )}
      </MyCryptoList>
    </>
  );
}
