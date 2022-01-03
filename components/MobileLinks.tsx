import styled from "styled-components";
import Link from "next/link";
import links from "../data/links";
import { useDispatch, useSelector } from "react-redux";
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
  opacity: 0;
  transition: opacity 300ms ease-in;

  &.active {
    opacity: 1;
  }
`;

export default function MobileLinks() {
  const dispatch = useDispatch();
  const mobileMenu = useSelector((state: any) => state.mobileMenu);

  const handleMenuClose = () => {
    dispatch(closeMenu());
  };

  return (
    <List>
      {links.map(({ id, name, url }) => {
        return (
          <ListItem
            className={`${mobileMenu ? "active" : ""}`}
            onClick={handleMenuClose}
            key={id}
          >
            <Link href={url}>{name}</Link>
          </ListItem>
        );
      })}
    </List>
  );
}
