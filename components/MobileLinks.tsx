import styled from "styled-components";
import Link from "next/link";
import links from "../data/links";
import { useDispatch } from "react-redux";
import { closeMenu } from "../actions";

const List = styled.ul`
  list-style: none;
  margin-top: 120px;
`;

const ListItem = styled.li`
  text-transform: capitalize;
  color: var(--white);
  line-height: 5rem;
  font-size: 2.5rem;
`;

export default function MobileLinks() {
  const dispatch = useDispatch();

  const handleMenuClose = () => {
    dispatch(closeMenu());
  };

  return (
    <List>
      {links.map(({ id, name, url }) => {
        return (
          <ListItem onClick={handleMenuClose} key={id}>
            <Link href={url}>{name}</Link>
          </ListItem>
        );
      })}
    </List>
  );
}
