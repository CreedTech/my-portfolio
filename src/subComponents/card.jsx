import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../assets/css/styles.css";
import {motion} from 'framer-motion';
import Me from "../assets/Images/profile-img.png";

const Box = styled.div`
  text-decoration: none;
`;

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

const Card = (props) => {
  const { id, name } = props.data;

  return (
    <motion.div key={id} variants={Item} className="work__img" >
      <img src={Me} alt="NoImg"/>
          <div className="work__link">
          <Box key={id} className="work__link-name">
              {name}
          </Box>
          </div>
    </motion.div>
  );
};

export default Card;
