import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { darkTheme } from "./themes";
import LogoComponents from "../subComponents/logoComponents";
import SocialIcons from "../subComponents/socialIcons";
import HomeButton from "../subComponents/powerButton";
import ParticleComponents from "../subComponents/particleComponents";
import BigTitle from '../subComponents/bigTitle'

import astronaut from "../assets/Images/spaceman.png";

const float = keyframes`
0%{
    transform: translateY(-10px);
}
50%{
    transform: translateY(15px) translateX(15px);
}
100%{
    transform: translateY(-10px);
}
`;

const Space = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  
  }

`;

const Main = styled.div`
border: 2px solid ${props => props.theme.uniqueText};
color: ${props => props.theme.text};
padding: 2rem;
width:50%;
height:60vh;
z-index:3;
line-height: 1.5;

display:flex;
justify-content:center;
align-items:center;
font-size:calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position:absolute;
left:calc(3rem + 5vw);
top: 10rem;

font-family: 'Ubuntu Mono', monospace;
font-style: italic;
`;

const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponents />
        <SocialIcons />
        <HomeButton />
        <ParticleComponents />

        <Space>
          <img src={astronaut} alt="aboutImage" />
        </Space>
        <Main>
          I'm a Software developer located in Nigeria. I create simple
          yet beautiful works with great user experience.
          <br />
          <br />
          I'm a dedicated and conscientious developer with great communication
            skills and excellent professional settings. I'm an independent freelancer and blogger. I
          love to code and debug😅. <br /><br /> excited by all the
            challenges inherent in the position and look forward to the
            opportunities it presents. You can connect with me via my
          social links.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default About;
