import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Typed from "react-typed";

const DarkDiv = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  height: 45vh;
  display: flex;
  z-index: 1;
  backdrop-filter: blur(4px);
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Text = styled(motion.div)`
  font-size: 1.5rem;
  // line-height: 1.5;
  line-spacing: 0.4;
  color: ${(props) => props.theme.text};
  padding: 0.5rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  transition: all 1s ease;

  @media screen and (max-width: 370px) {
    .about{
      display:none;
    }
  }
  // @media screen and (max-height: 700px) {
  //   .about{
  //     display:none;
  //   }
  }

  .about__button{
    color: ${props => props.theme.text};
    font-size:calc(0.6rem + 1vw);
  text-decoration: none;
  margin-top: .5rem;
  width: calc(1.5rem + 10vw);
  text-align: center;
  padding:1rem;
  border: 2px solid ${props => props.theme.uniqueText};
  }
`;

const Info = () => {
  return (
    <div>
      <DarkDiv>
        <Text
          initial={{ scale: 0, opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          trainsition={{ duration: 2, delay: 1 }}
        >
          <code
            style={{
              color: "#f94204",
              fontSize: "1rem",
              fontfamily: "Ubuntu Mono",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            &lt;head&gt;
          </code>
          <h2>
            Hi, <span style={{ color: "#f94204" }}>I'm Ayoola.</span>
          </h2>

          <code
            style={{
              color: "#f94204",
              fontSize: "1rem",
              fontfamily: "Ubuntu Mono",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            &lt;/head&gt;
          </code>
          <code
            style={{
              color: "#f94204",
              fontSize: "1rem",
              fontfamily: "Ubuntu Mono",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            &lt;span&gt;
          </code>
          <span initial="hidden" animate="visible">
            <p className="about">I'm a dedicated and conscientious developer with great communication
            skills and excellent professional settings.</p>
            <p style={{ fontSize: "calc(1.5rem + 1vw)" }}>
              {" "}
              I am &nbsp;
              <Typed
                style={{ background: "transparent" }}
                strings={[
                  " A Web Developer.",
                  " A Mobile Developer.",
                  " A Full Stack Developer.",
                  " A Front End Developer.",
                  " A React Developer.",
                  " A Back End Developer.",
                  " A UI/UX designer.",
                  " A Python Dev.",
                  " A Django Enthusiast.",
                  " An Asp.net Developer.",
                  " A Flutter Lover.",
                ]}
                typeSpeed={70}
                backSpeed={60}
                loop
              >
                <span
                  style={{
                    color: "#f94204",
                    fontSize: "calc(1.5rem + 1vw)",
                  }}
                ></span>
              </Typed>
            </p>
          </span>
          <code
            style={{
              color: "#f94204",
              fontSize: "1rem",
              fontfamily: "Ubuntu Mono",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            &lt;/span&gt;
          </code>
        <a href="mailto:ayodeleayoolaoke4@gmail.com" className="hvr-shutter-in-horizontal about__button">Contact Me</a>
        </Text>
      </DarkDiv>
    </div>
  );
};

export default Info;
