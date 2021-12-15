import styled from "styled-components";

const MyContactForm = styled.form`
  width: 400px;
  height: 500px;
  padding: 60px 40px 70px 40px;
  box-shadow: 1px 6px 10px 1px rgba(0, 0, 0, 0.3);
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
`;

const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;

  &.name-input {
    width: 190px;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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
`;

export default function ContactInfo() {
  return (
    <MyContactForm
      name="contact v1"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      {/* netlify code */}
      <input type="hidden" name="form-name" value="contact v1" />
      <div hidden>
        <input name="bot-field" />
      </div>

      {/* form code */}
      <NameWrapper>
        <Div>
          <Label htmlFor="first-name">First Name</Label>
          <Input
            className="name-input"
            id="first-name"
            type="text"
            name="first-name"
          />
        </Div>
        <Div>
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            className="name-input"
            id="last-name"
            type="text"
            name="last-name"
          />
        </Div>
      </NameWrapper>
      <Div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" />
      </Div>
      <Div>
        <RadioWrapper>
          <Radio
            type="radio"
            id="suggestion"
            name="message-type"
            value="suggestion"
          />
          <Label htmlFor="suggestion">Suggestion</Label>
        </RadioWrapper>
        <RadioWrapper>
          <Radio
            type="radio"
            id="support"
            name="message-type"
            value="support"
          />
          <Label htmlFor="support">Technical Support</Label>
        </RadioWrapper>
        <RadioWrapper>
          <Radio type="radio" id="other" name="message-type" value="other" />
          <Label htmlFor="other">Other</Label>
        </RadioWrapper>
      </Div>
      <Div>
        <Label htmlFor="details">Details</Label>
        <Details id="details" name="details" rows={5} />
      </Div>
      <Button type="submit">Send Message</Button>
    </MyContactForm>
  );
}
