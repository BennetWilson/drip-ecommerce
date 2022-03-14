import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpaperaccess.com/full/1157995.jpg") center;

    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
width: 26%;
padding: 20px;
/* background-color: white; */
${mobile({width: "75%", textAlign:"center" })}

`;
const Title = styled.h1`
font-size: 34px;
display: flex;
justify-content: center;
font-weight: 900;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: center;
${mobile({justifyContent: "center" })}
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
display: flex;
justify-content: center;
${mobile({width: "75%" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an accoun, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
