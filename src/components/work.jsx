import React from "react";
import styled from "styled-components";
import LogoComponents from "../subComponents/logoComponents";
import HomeButton from "../subComponents/powerButton";
import SocialIcons from "../subComponents/socialIcons";
import "../assets/css/styles.css";
import BigTitle from '../subComponents/bigTitle';
import {motion} from 'framer-motion';
import { Work } from "../data/WorkData";
import Card from "../subComponents/card";

const MainContainer = styled.div`
  backgroung-color: #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Box = styled.div`
  // background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  background-color: #000;
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 5rem;
`;

const Home = styled.div`
position: fixed;
top:0;
background-color:transparent;
z-index:5;
width:100%;
height: 15%;
box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
backdrop-filter: blur(2px);
`



const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const WorkPage = () => {
  return (
    <MainContainer>
      <Box>
      <Home>
        <LogoComponents />
              <HomeButton size={30} style={{ position: 'fixed', top:0, backgroundColor:'transparent', zIndex:10}} />
        </Home>
        <SocialIcons />
        <HomeButton />

        <motion.section variants={container} initial='hidden' animate='show' className="work section">
          <div  className="work__container bd-grid">
            {Work.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </div>
        </motion.section>
        <BigTitle text="WORK" top='10%' right="20%" />
      </Box>
    </MainContainer>
  );
};

export default WorkPage;
