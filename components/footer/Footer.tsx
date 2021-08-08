import styled from "styled-components";

const MyFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  text-align: center;
  .copyright {
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.5);
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
