import styled from "styled-components";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setLink, unsetLink } from "../actions/index";

const MyTradeLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 24px 0 24px 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(230, 233, 255, 1) 100%
  );
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
  background-color: var(--white);
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

export default function TradeLinks() {
  const coinsTrade = useSelector((state: any) => state.coinsTrade);
  const dispatch = useDispatch();

  const handleSetCoin = (name: string) => {
    dispatch(setLink(name));
    console.log(name);
  };

  return (
    <MyTradeLinks>
      <List>
        {coinsTrade.map((e: any) => {
          return (
            <ListItem
              key={e.id}
              onClick={() => {
                handleSetCoin(e.id);
              }}
            >
              <Image className="logo" src={e.image} height="42" width="42" />
            </ListItem>
          );
        })}
      </List>
    </MyTradeLinks>
  );
}
