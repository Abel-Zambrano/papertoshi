import styled from "styled-components";
import { HiLightBulb } from "react-icons/hi";
import { BiSupport, BiSmile } from "react-icons/bi";
import ContactForm from "./ContactForm";
import { device } from "../JS/device";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 40px 0 40px 0;

  @media ${device.phone} {
    flex-direction: column;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  padding-left: 100px;

  @media ${device.phone} {
    align-items: center;
    width: 100%;
    margin: 60px 0 60px 0;
    padding-left: 0;
  }
`;

const Heading = styled.h2`
  font-size: 1.6rem;
  text-decoration: underline;
  text-align: center;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  line-height: 8rem;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
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

const StyledContactForm = styled(ContactForm)`
  margin-right: 50px;

  @media ${device.phone} {
    margin-right: 0;
  }
`;

export default function ContactInfo() {
  return (
    <Container>
      <InfoWrapper>
        <Heading>Contact Us</Heading>
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
      <StyledContactForm />
    </Container>
  );
}
