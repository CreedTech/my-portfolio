import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Logo = styled(NavLink)`
display: inline-block;
color: ${props => props.theme.uniqueText};
font-family: 'Pacifico', cursive; 
text-decoration: none;
font-size: 22px;

position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
`


const LogoComponents = () => {
  return (
      <Logo to="/">
        ayoola
    </Logo>
  )
}

export default LogoComponents
