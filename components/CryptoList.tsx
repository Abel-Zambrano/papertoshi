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
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white);
  list-style: none;
  width: 540px;
  height: 200px;
  border-radius: 14px;
  margin: 20px 0;
  box-shadow: 1px 6px 10px 3px rgba(0, 0, 0, 0.3);

  .container {
    display: flex;
    align-items: center;

    .wrapper {
      display: flex;
      align-items: center;
      margin: 10px 0 10px 10px;

      .heading {
        background-color: var(--primary-light);
        border-radius: 20px;
        display: flex;
        justify-content: start;
        align-items: center;
        width: 160px;

        .logo {
          border-radius: 50%;
        }

        .shares {
          margin-left: 20px;
        }
      }

      .name {
        margin-left: 10px;
        font-weight: 400;
      }
    }
  }

  .asset-trade {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-value {
      font-size: 5rem;
      font-weight: 200;
      margin-left: 50px;
    }

    &-button {
      width: 120px;
      height: 34px;
      border: 1px solid var(--green-action);
      background-color: var(--off-white);
      border-radius: 14px;
      margin-right: 50px;
    }
  }

  .asset-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    &-change {
      margin-left: 10px;
    }

    &-current {
      margin-right: 10px;
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
          }: ListProps) => {
            let currentPrice = formatter.format(current_price);
            // format API percent change to 2 place decimal
            let priceChange24h = Number(
              price_change_percentage_24h / 100
            ).toLocaleString(undefined, {
              style: "percent",
              minimumFractionDigits: 2,
            });
            return (
              <CryptoItem key={id}>
                <div className="container">
                  <div className="wrapper">
                    <div className="heading">
                      <Image
                        className="logo"
                        src={image}
                        alt={name}
                        width={30}
                        height={30}
                      />
                      <h3 className="shares">501.10</h3>
                    </div>
                    <h2 className="name">{name}</h2>
                  </div>
                </div>
                <div className="asset-trade">
                  <h2 className="asset-trade-value">$1,000</h2>
                  <button className="asset-trade-button">Trade</button>
                </div>
                <div className="asset-price">
                  <p className="asset-price-change">{priceChange24h}</p>
                  <p className="asset-price-current">{currentPrice}</p>
                </div>
              </CryptoItem>
            );
          }
        )}
      </MyCryptoList>
    </>
  );
}
