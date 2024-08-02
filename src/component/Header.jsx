import React from 'react'
import styled from "styled-components"

export const Header = () => {
  return (
    <StyledHeader>
        <h1>Peaksoft (❁´◡`❁)  Tour</h1>
    </StyledHeader>
  )
}


const StyledHeader = styled.header`
width: 100%;
height: 60px;
padding: 10px;
background-color: black;

&>h1 {
    text-align:center;
    color: #e2d8d8;
}



    
`