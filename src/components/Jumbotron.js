import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import backgroundPicture from '../assets/backgroundPicture.jpg'


const Styles = styled.div`
  .jumbo {
    background: url(${backgroundPicture}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: calc(10px + 2vmin);
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
export const Jumbotron = () => (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <h1><strong>Welcome</strong></h1>
            <p>This is Zestie</p>
            </Container>
    </Jumbo>
  </Styles>
)



export default Jumbotron;