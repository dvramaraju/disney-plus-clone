import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="images/cta-logo-one.svg" />
        <SignUp>get all there</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: -1;
    background-image: url("images/login-background.jpg");
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  text-transform: uppercase;
  width: 100%;
  background-color: #0063e5;
  border-radius: 4px;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 18px;
  margin-bottom: 12px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  color: hsla(0, 0%, 95.3%, 1);
  margin: 0 0 24px;
`;
const CTALogoTwo = styled.img`
  width: 90%;
`;
