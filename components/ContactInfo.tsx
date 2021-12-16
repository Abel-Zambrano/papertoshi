import styled from "styled-components";
import { HiLightBulb } from "react-icons/hi";
import { BiSupport, BiSmile } from "react-icons/bi";
import ContactForm from "./ContactForm";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InfoWrapper = styled.div`
  width: 50%;
  /* margin-top: 164px; */
`;

const Heading = styled.h2`
  font-size: 2rem;
  text-decoration: underline;
  margin: 0 0 30px 100px;
`;

const Info = styled.p`
  font-size: 1.8rem;
  color: var(--black-light);
  margin-left: 100px;
  line-height: 2.5rem;
`;

const List = styled.ul`
  margin: 30px 0 0 100px;
  list-style: none;
  line-height: 8rem;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  border-radius: 50%;
  width: 30px;
  height: 30px;

  .contact-icon {
    font-size: 2rem;
    color: var(--white);
  }
`;

const Text = styled.p`
  margin-left: 14px;
`;

export default function ContactInfo() {
  return (
    <Container>
      <InfoWrapper>
        <Heading>Contact Us</Heading>
        <Info>We would love to hear from you!</Info>
        <List>
          <Item>
            <IconWrapper>
              <HiLightBulb className="contact-icon" />
            </IconWrapper>
            <Text>Ideas and suggestions</Text>
          </Item>
          <Item>
            <IconWrapper>
              <BiSupport className="contact-icon" />
            </IconWrapper>
            <Text>Technical support</Text>
          </Item>
          <Item>
            <IconWrapper>
              <BiSmile className="contact-icon" />
            </IconWrapper>
            <Text>Say hello to the team</Text>
          </Item>
        </List>
      </InfoWrapper>
      <ContactForm />
    </Container>
  );
}
