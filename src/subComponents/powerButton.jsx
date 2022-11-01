import React from "react";
import styled from "styled-components";
import { BiHome } from 'react-icons/bi';
import { NavLink } from "react-router-dom";

const Icon = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: transparent;
  color: white;
  padding: 0.3rem;
  border-radius: 50%;
  border:none;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;

  cursor: pointer;

  &:hover {
    
    color: #f94204;
    border: 2px solid #f94204;
  }

  &>*:first-child{
    text-decoration: none;
    color: inherit;
  }
  transition: all 1s ease;
`;

const HomeButton = () => {
  return (
    <Icon>
      <NavLink to="/">
      <BiHome  size={30}/>
      </NavLink>
    </Icon>
  );
};

export default HomeButton;
