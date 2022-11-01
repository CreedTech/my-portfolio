import React from "react";
import styled from "styled-components";

const DarkDiv = styled.div`
  position: relative;
  background-color: #000;
  left: 50%;
  border-top: 1px solid ${(props) => props.theme.uniqueText};
  bottom: 0;
  padding:8rem 2.5rem 0.5rem;
  transform: translate(-50%, 0);
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content:  space-around;
  align-items: center;
  z-index: 1;
  backdrop-filter: blur(4px);
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Text = styled.div`
  font-size: 1.3rem;
  line-height: 1.5;
  line-spacing: 0.4;
  color: ${(props) => props.theme.text};
//   padding: 10rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  transition: all 1s ease;
`;

const Footer = () => {
  return (
    <div>
      <DarkDiv>
        <Text

        >
            I am A software developer. <br />
            I'm a dedicated and conscientious developer with great communication
            skills and excellent professional settings.
        </Text>
      </DarkDiv>
    </div>
  );
};

export default Footer;
