import styled from "styled-components";
import Image from "next/image";
import TableHeader from "./TableHeader";
import TableLabel from "./TableLabel";

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
  color: var(--black-dark);
  padding: 10px 0;
  border-bottom: 2px solid var(--white);

  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

const Container = styled.div`
  display: flex;
  width: 20%;

  .name-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 10px;

    @media screen and (max-width: 750px) {
      font-size: 0.8rem;
    }

    &-name {
      font-weight: 400;
    }

    &-symbol {
      text-transform: uppercase;
      font-weight: 200;
    }
  }
`;

const ImageWrapper = styled.div`
  min-width: 30px;
  min-height: 30px;
`;

const StyledTableLabel = styled(TableLabel)`
  &.mobile-hidden {
    @media screen and (max-width: 750px) {
      display: none;
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
      <TableHeader />
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
                <Container>
                  <ImageWrapper>
                    <Image src={image} alt={name} width={30} height={30} />
                  </ImageWrapper>
                  <div className="name-container">
                    <h2 className="name-container-name">{name}</h2>
                    <p className="name-container-symbol">{symbol}</p>
                  </div>
                </Container>
                <TableLabel textColor="black" content={`${currentPrice}`} />
                <TableLabel textColor="black" content={`${priceChange24h}`} />
                <StyledTableLabel
                  className="mobile-hidden"
                  textColor="black"
                  content={`${marketCap}`}
                />
              </CryptoItem>
            );
          }
        )}
      </MyCryptoList>
    </>
  );
}
