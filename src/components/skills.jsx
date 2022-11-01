import React from "react";
import styled from "styled-components";
import LogoComponents from "../subComponents/logoComponents";
import SocialIcons from "../subComponents/socialIcons";
import "../assets/css/styles.css";
import HomeButton from "../subComponents/powerButton";
import BigTitle from '../subComponents/bigTitle';
import { Design, Developer } from "./allSvg";
import { BsGlobe2 } from "react-icons/bs";
import { FiFigma, FiDatabase } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { RiAppleLine } from "react-icons/ri";
import { TbBrandDocker, TbBrandGithub, TbBrandGit } from "react-icons/tb";
import { CgCloud } from "react-icons/cg";
import { AiOutlineWindows } from "react-icons/ai";
import { VscTerminalCmd } from "react-icons/vsc";
import {
  MdPhoneAndroid,
  MdOutlineAndroid,
  MdOutlinePhoneIphone,
} from "react-icons/md";
// import ParticleComponents from "../subComponents/particleComponents";

const MainContainer = styled.div`
  backgroung-color: #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  // background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  background-color: #000;
  width: 100%;
  height: auto;
  position: relative;
//   padding-bottom: 5rem;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`;

const Home = styled.div`
position: fixed;
top:0;
background-color:transparent;
z-index:1000;
width:100%;
height: 15%;
// left: 50%;
box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
backdrop-filter: blur(2px);
`

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: auto;
  position: relative;
  padding: 1rem;
  margin:1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  
  }

`;

const Main = styled.div`
  border: 2px solid rgba(249, 66, 4, 0.4);
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 1rem;
  width: 30vw;
  margin: 1.5rem;
  height: 60vh;
  border-radius: 5px;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 2px solid rgb(249, 66, 4);
  }

  @media  (max-width: 992px) {
    width: 50vw;
    height: 40vh;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 0.5vw);
  padding: 0.5rem 0;
`;
const Icons = styled.div`
  color: #fff;
  padding: 0.5rem 0;

  .icons {
    padding-right: 1.5rem;
  }
`;

const Skills = () => {
  return (
    <MainContainer>
      <Container>
        <SocialIcons />
              <Home>
        <LogoComponents />
              <HomeButton size={30} style={{ position: 'fixed', top:0, backgroundColor:'transparent', zIndex:10}} />
        </Home>
        {/* <ParticleComponents/> */}
        <Center>
          <Box>
            {/* <ParticleComponents/> */}
            <Main className="skills_main">
              
              <Title>
                <Design width={40} height={40} />
                FrontEnd Developer
              </Title>
              <Icons>
                <BsGlobe2 className="icons" size={25} />
                <FiFigma className="icons" size={25} />
                <GoBrowser className="icons" size={25} />
                <FaLaptopCode className="icons" size={25} />
              </Icons>
              <Description>
                <p>Html, Css, JavaScript</p>
              </Description>
            </Main>
            <Main className="skills_main">
              <Title>
                <Developer width={40} height={40} />
                Backend Developer
              </Title>
              <Icons>
                <CgCloud className="icons" size={25} />
                <FiDatabase className="icons" size={25} />
                <FaLaptopCode className="icons" size={25} />
              </Icons>
              <Description>
                <p>Html, Css, JavaScript</p>
              </Description>
            </Main>
            <Main className="skills_main">
              <Title>
                <Design width={40} height={40} />
                Android Apps Development
              </Title>
              <Icons>
                <MdPhoneAndroid className="icons" size={25} />
                <MdOutlineAndroid className="icons" size={25} color="white" />
              </Icons>
              <Description>
                <p>Html, Css, JavaScript</p>
              </Description>
            </Main>
            <Main className="skills_main">
              <Title>
                <Developer width={40} height={40} />
                IOS Apps Development
              </Title>
              <Icons>
                <RiAppleLine className="icons" size={25} />
                <MdOutlinePhoneIphone
                  className="icons"
                  size={25}
                  color="white"
                />
              </Icons>
              <Description>
                <p>Html, Css, JavaScript</p>
              </Description>
            </Main>
            <Main className="skills_main">
              <Title>
                <Design width={40} height={40} />
                Version Control
              </Title>
              <Icons>
                <TbBrandDocker className="icons" size={25} />
                <TbBrandGit className="icons" size={25} />
                <TbBrandGithub className="icons" size={25} />
              </Icons>
              <Description>
                <p>Html, Css, JavaScript</p>
              </Description>
            </Main>
            <Main className="skills_main">
              <Title>
                <Developer width={40} height={40} />
                Console & Desktop Apps
              </Title>
              <Icons>
                <VscTerminalCmd className="icons" size={25} />
                <AiOutlineWindows className="icons" size={25} />
                <RiAppleLine className="icons" size={25} />
              </Icons>
              <Description>
                <p>Html, Css, JavaScript</p>
              </Description>
            </Main>
          </Box>
            <BigTitle text="SKILLS" top="80%" right="30%" />
        </Center>
      </Container>
    </MainContainer>
  );
};

export default Skills;
