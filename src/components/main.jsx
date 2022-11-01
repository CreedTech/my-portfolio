// import React, { useState } from "react";
import styled from "styled-components";
import LogoComponents from "../subComponents/logoComponents";
import SocialIcons from "../subComponents/socialIcons";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import HomeButton from "../subComponents/powerButton";
import Info from "./info";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Github = styled(NavLink)`
  color: ${(prop) => prop.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const RESUME = styled(NavLink)`
  color: ${(prop) => prop.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const WORK = styled(NavLink)`
  color: ${(prop) => prop.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const SKILLS = styled(NavLink)`
  color: ${(prop) => prop.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Main = () => {
  return (
    <MainContainer>
      
      {/* <DarkDiv  /> */}
      <Container>
        <HomeButton size={30} />
        <LogoComponents />
        <SocialIcons />
        <Github to={{ pathname: "https://github.com/creedtech" }}>
          <motion.h2
          initial={{
            y:-200,
            transition: { type:'spring', duration: 1.5, delay:1}
        }}
        animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1}
        }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Github
          </motion.h2>
        </Github>
        <RESUME to={{pathname:'https://drive.google.com/file/d/1ulfWL7zmwCSqkdfzjmFMWthNy5uz0KQJ/view?usp=sharing'}} target="_blank">
          <motion.h2
          initial={{
            y:-200,
            transition: { type:'spring', duration: 1.5, delay:1}
        }}
        animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1}
        }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Resume
          </motion.h2>
        </RESUME>
        <WORK to="/work">
          <motion.h2
          initial={{
            y:-200,
            transition: { type:'spring', duration: 1.5, delay:1}
        }}
        animate={{
            y:0,
            transition: { type:'spring', duration: 1.5, delay:1}
        }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about">
            <motion.h2
            initial={{
              y:200,
              transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:1}
          }}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
            initial={{
              y:200,
              transition: { type:'spring', duration: 1.5, delay:1}
          }}
          animate={{
              y:0,
              transition: { type:'spring', duration: 1.5, delay:1}
          }}
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      <Info />
    </MainContainer>
  );
};

export default Main;
