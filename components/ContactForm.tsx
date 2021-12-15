import styled from "styled-components";

const MyContactForm = styled.form`
  width: 50%;
`;

const Wrapper = styled.div``;

const Label = styled.label``;

const Name = styled.input``;

const Email = styled.input``;

const Radio = styled.input``;

const Details = styled.textarea``;

export default function ContactInfo() {
  return (
    <MyContactForm
      name="contact v1"
      method="POST"
      data-netlify="true"
      // onSubmit="submit"
    >
      <input type="hidden" name="form-name" value="contact v1" />
      <Wrapper>
        <Label htmlFor="first-name">First Name</Label>
        <Name id="first-name" type="text" name="first-name" />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="last-name">Last Name</Label>
        <Name id="last-name" type="text" name="last-name" />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="email">Email</Label>
        <Name id="email" type="email" name="email" />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="details">Details</Label>
        <Details id="details" name="details" />
      </Wrapper>
      <button type="submit">send message</button>
    </MyContactForm>
  );
}
