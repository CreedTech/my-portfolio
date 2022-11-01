import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Github, Linkedin, Twitter } from "../components/allSvg";
import { RiFacebookCircleLine } from 'react-icons/ri';
import { motion } from 'framer-motion'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.2rem;
  }
  .icon:hover {
    color: #f94204;
    transform: scale(1.5);
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.uniqueText};
`;

const SocialIcons = () => {
  return (
    <Icons>
      <motion.div
      initial={{transform:"scale(0)"}}
      animate={{scale:[0,1,1.5,1]}}
      transition={{type:'spring', duration:1, delay:1}}
      >
        <NavLink style={{ color: "#ffffff" }} target="_blank" to={{pathname:"https://github.com/creedtech"}}>
          <Github className="icon" width={25} height={25} fill="currentColor" />
        </NavLink>
      </motion.div>
      <motion.div
      initial={{transform:"scale(0)"}}
      animate={{scale:[0,1,1.5,1]}}
      transition={{type:'spring', duration:1, delay:1.2}}
      >
        <NavLink style={{ color: "#ffffff" }} target="_blank" to={{pathname:"https://twitter.com/techy_ayo"}}>
          <Twitter className="icon" width={25} height={25} fill="currentColor" />
        </NavLink>
      </motion.div>
      <motion.div
      initial={{transform:"scale(0)"}}
      animate={{scale:[0,1,1.5,1]}}
      transition={{type:'spring', duration:1, delay:1.4}}
      >
        <NavLink style={{ color: "#ffffff" }} target="_blank" to={{pathname:"https://www.linkedin.com/in/ayodele-ayoola-78a5341b2"}}>
          <Linkedin className="icon" width={25} height={25} fill="currentColor" />
        </NavLink>
      </motion.div>
      <motion.div
      initial={{transform:"scale(0)"}}
      animate={{scale:[0,1,1.5,1]}}
      transition={{type:'spring', duration:1, delay:1.6}}
      >
        <NavLink style={{ color: "#ffffff" }} target="_blank" to={{pathname:"https://facebook.com/ayoolaoke.96"}}>
          <RiFacebookCircleLine className="icon" width={45} size={30} height={45} fill="currentColor" />
        </NavLink>
      </motion.div>

      <Line
      
initial={
  {
      height:0
  }
}
animate={{
  height: '8rem'
}}
transition={{
  type:'spring', duration:1, delay:0.8
}}
      />
    </Icons>
  );
};

export default SocialIcons;
