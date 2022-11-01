import React from "react";
import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled(motion(NavLink))`
  width: calc(15rem + 15vw);
  text-decoration: none;
  height: 60vh;
  padding: 1.5rem;
  margin: 1.5rem;
  color: ${(props) => props.theme.text};
  border: 2px solid rgba(249, 66, 4, 0.4);
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 5px;
  transition: all .3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;

  // @media  (max-width: 900px) {
  //   width: calc(10rem + 15vw);
  //   height: 40vh;
  // }

  @media  (max-width: 992px) {
    width: 50vw;
    // height: 40vh;
  }

  &:hover {
    // box-shadow: 0 0 .2rem 0 ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.uniqueText};
    transition: all .3s ease;
  }
  
`;
const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: contain;
  border: 1px solid transparent;
  background-position: center center;
  border-radius: 5px 5px 0 0;

  ${Box}:hover & Image{
    background-image: ${(props) => `url(${props.img})`};
    color: ${(props) => props.theme.uniqueText};
  }

  
`;
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 2.5rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-top: 1px solid ${(props) => props.theme.uniqueText};

  ${Box}:hover &{
    color: ${(props) => props.theme.body};
  }
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}


const BlogComponents = (props) => {
  const { name, imgSrc, link } = props.blog;
  return (
    <Container
    variants={Item}
    >
      <Box target="_blank" to={{ pathname: link }}>
      <Image img={imgSrc}/>
          <Title>{name}</Title>
    </Box>
    </Container>
  );
};

export default BlogComponents;
