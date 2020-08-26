import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Phrase from './components/Phrase';
import Logo from './logo.svg';
import './App.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3rem;
  flex-direction: column; 
`;
const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  cursor: pointer;
`;
const LogoContainer = styled.div`
  img{
    width: 15rem;
  }
`;
function App(){

  const [phrase, setPhrase] = useState({});
  const [loading, setLoading] = useState(false);

  //Getting data of API
  const getPhrase = () => {
    setLoading(false);
    fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(res => res.json())
    .then(res => {
      setPhrase(res[0])
      setLoading(true);
    });
  }

  useEffect(() => {
    getPhrase();
  }, []);
  return(
    <Container>
      <LogoContainer>
        <img src = { Logo } alt="logo"/>
      </LogoContainer>
      { loading ? <Phrase phrase = { phrase }/>: <div className="lds-dual-ring"></div>  }
      
      <Button onClick = { getPhrase }>Obtener Frase</Button>
    </Container>
  )

}


export default App;