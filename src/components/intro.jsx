import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";


const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.uniqueText} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.uniqueText} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;
  border: 1px solid ${(props) => props.theme.uniqueText};
  z-index: 1;
  transition: all 1s ease;
`;

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;


  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
  }
`;
const Text = styled(motion.div)`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.text};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => props.theme.text};
    font-size: calc(0.5rem + 1vw);
    font-weight: 300;
  }
`;

const Intro = () => {

  return (
    <div>
      <Box
      >
        <SubBox >
          <Text
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 50 }}
          transition={{ type:'fade', duration:1.5}}
          >
            <h1>Hi,</h1>
            <h3 style={{ color: "#f94204" }}>I'm Ayoola.</h3>
            <h6>
              I am a Software Engineer. I specialise in building fullstack web
              applications and mobile.
            </h6>
          </Text>
        </SubBox>
        <SubBox >
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type:'fade', duration:2, delay:.5}}
            >
            <img className="pic" src={Me} alt="Profile" />
            </motion.div>
          </div>
        </SubBox>
      </Box>
    </div>
  );
};

export default Intro;
