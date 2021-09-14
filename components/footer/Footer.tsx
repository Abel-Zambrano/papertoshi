import styled from "styled-components";

const MyFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  text-align: center;
  background-color: var(--primary);
  .copyright {
    font-size: 1.5rem;
    color: var(--white);
  }
`;

const Footer = () => {
  return (
    <MyFooter>
      <p className="copyright">&copy; Abel Zambrano 2021</p>
    </MyFooter>
  );
};

export default Footer;
