import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    background-color: #fff;
    padding: 3rem;
    border-radius: .5rem;
    max-width: 800px;
    margin-top: 3rem;
    h2{
        font-family: Arial Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }  
    p{
        font-family: Arial Helvetica, sans-serif;
        text-align: right;
        font-weight: bold;
        color: #666;
        padding-top: .5rem;
    }
`;

function Phrase({phrase}){
    return(
        <Container>
            <h2>{phrase.quote}</h2>
            <p>-{phrase.author}</p>
        </Container>
    )
}

export default Phrase;