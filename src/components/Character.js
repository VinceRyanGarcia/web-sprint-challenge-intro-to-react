import React from 'react';
import styled from 'styled-components';

export default function Character(props){
    const { character } = props;
    
    

    return (
    <div className="character.js container">
        <BoxStyle>
        <br></br><br></br>
        <img src = {character.image} alt="something"></img>
        <br></br><br></br>
        {character.name}
        </BoxStyle>
    </div>)
}
const BoxStyle = styled.p`
    color: black;
    background-color: white;
    width: 350px;
    height: 400px;
    margin-top:25px;
    
    

`;