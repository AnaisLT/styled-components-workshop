import React from 'react';
import styled from 'styled-components';
import Charlie from './charlies-angels.jpeg';
import Chewie from './chewies-angels.jpeg';

const Wrapper = styled.div`
  color: palevioletred;
  padding: 4em;
  height: 100em;
  background: papayawhip;
`;

const Title = styled.h1`
  text-align: center;
  color: ${ props => props.primary ? "royalblue" : "palevioletred"};
  font-family: ${ props => props.font ? "lobster" : "Open Sans"};
  font-weight: ${ props => props.thin ? "normal" : "bold"};
  text-transform: ${
  props => {
    if (props.uppercase) return "uppercase";
    return "none";
  }}
`;

const Container = styled.section`
display: flex;
flex-direction: row;
justify-content: space-around;
`;

const Button = styled.button`
background: ${ props => props.primary ? "palevioletred" : "white"};
color: ${ props => props.primary ? "white" : "palevioletred"};
font-size: 1em;
font-family: 'fascinate', cursive;
text-decoration: none;
margin: 1em;
padding: 1em 2.5em;
border: 2px solid palevioletred;
border-radius: 3px;
`;


//How to extend a component instead of using a function?

export default function App() {
  return (
    <>
      <Wrapper>
        <Title>Good Morning Angels!</Title>
        <Title primary font>Good Morning Charlie!</Title>
        <Title thin uppercase>Tell me Angels, do you:</Title>
        <Container>
          <Button primary as="a" href={Charlie}>Accept the Mission</Button>
          <Button as="a" href={Chewie}>Reject the Mission</Button>
        </Container>
      </Wrapper>
    </>
  );
}






