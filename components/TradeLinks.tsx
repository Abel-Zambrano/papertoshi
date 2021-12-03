import styled from "styled-components";
import Image from "next/image";

const MyTradeLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  padding: 24px 0 24px 0;
`;

const Heading = styled.h1`
  text-align: center;
  padding: 10px 0 10px 0;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 1100px;
  padding: 10px 0 10px 0;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  list-style: none;
  border: 1px solid var(--gray);
  border-radius: 10px;
  transition: 0.2s;
  :hover {
    transform: scale(1.1);
    border: 1.1px solid var(--primary);
  }

  .logo {
    border-radius: 50%;
  }
`;

const Name = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-top: 5px;
`;

type Props = {
  coins: any;
};

export default function TradeLinks({ coins }: Props) {
  return (
    <MyTradeLinks>
      <Heading>Trade in 12 different Cryptos</Heading>
      <List>
        {coins.map((e: any) => {
          return (
            <ListItem key={e.id}>
              <Image className="logo" src={e.image} height="42" width="42" />
              {/* <Name>{e.symbol}</Name> */}
            </ListItem>
          );
        })}
      </List>
    </MyTradeLinks>
  );
}
