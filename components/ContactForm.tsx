import styled from "styled-components";
import { device } from "../JS/device";

const MyContactForm = styled.form`
  width: 400px;
  height: 500px;
  padding: 60px 40px 70px 40px;
  box-shadow: 1px 6px 10px 1px rgba(0, 0, 0, 0.3);

  @media ${device.phone} {
    width: 70vw;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Label = styled.label`
  font-size: 1.2rem;

  &::after {
    content: "*";
    color: red;
    padding-left: 2px;
  }
`;

const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;

  &.name-input {
    width: 190px;

    @media ${device.phone} {
      width: 130px;
    }
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const RadioLabel = styled.label`
  font-size: 1.2rem;
`;

const Radio = styled.input`
  margin-right: 10px;
`;

const Details = styled.textarea`
  padding: 10px;
`;

const Button = styled.button`
  background-color: var(--primary-light);
  color: var(--white);
  width: 100%;
  margin-top: 10px;
  padding: 20px 0 20px 0;
  font-size: 1.6rem;
  border: none;
  transition: 0.2s;

  &:hover {
    background-color: var(--primary);
  }
`;

type Props = {
  className?: string;
};

export default function ContactForm({ className }: Props) {
  return (
    <MyContactForm
      className={className}
      name="contact v1"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      {/* netlify code */}
      <input type="hidden" name="form-name" value="contact v1" />

      {/* form code */}
      <NameWrapper>
        <Div>
          <Label htmlFor="first-name">First Name</Label>
          <Input
            className="name-input"
            id="first-name"
            type="text"
            name="first-name"
            required
          />
        </Div>
        <Div>
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            className="name-input"
            id="last-name"
            type="text"
            name="last-name"
            required
          />
        </Div>
      </NameWrapper>
      <Div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" required />
      </Div>
      <Div>
        <Label>Message Type</Label>
        <RadioWrapper>
          <Radio
            type="radio"
            id="suggestion"
            name="suggestion"
            value="suggestion"
          />
          <RadioLabel htmlFor="message-type">Suggestion</RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <Radio type="radio" id="support" name="support" value="support" />
          <RadioLabel htmlFor="message-type">Technical Support</RadioLabel>
        </RadioWrapper>
        <RadioWrapper>
          <Radio type="radio" id="other" name="other" value="other" />
          <RadioLabel htmlFor="message-type">Other</RadioLabel>
        </RadioWrapper>
      </Div>
      <Div>
        <Label htmlFor="details">Details</Label>
        <Details id="details" name="details" rows={5} required />
      </Div>
      <Button type="submit">Send Message</Button>
    </MyContactForm>
  );
}
