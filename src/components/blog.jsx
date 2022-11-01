import styled from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponents from "../subComponents/logoComponents";
import SocialIcons from "../subComponents/socialIcons";
import BlogComponents from "../subComponents/blogComponents";
import { Blogs } from "../data/BlogData";
import HomeButton from "../subComponents/powerButton";
import BigTitle from '../subComponents/bigTitle';
import { motion } from 'framer-motion'

const MainContainer = styled(motion.div)`
  // background-image: url(${img});
  backgroung-color: #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`

const Container = styled.div`
  // background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  background-color: #000;
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`;

const Box = styled.div`
width: 100vw;
  height: auto;
  position: relative;
  padding: 1rem;
  margin:1rem;


  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  // padding-top: 10rem;
  align-items: center;
`;


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

const Blog = () => {
  
  return (
    <div>
      <MainContainer
      variants={container}
      initial='hidden'
      animate='show'
      exit={{
          opacity:0, transition:{duration: 0.5}
      }}
      >
        <Container>
          <LogoComponents />
          <HomeButton />
          <SocialIcons />
          <Center>
          <Box>
              {Blogs.map((blog) => {
                return <BlogComponents key={blog.id} blog={blog} />;
              })}
          </Box>
          <BigTitle text="BLOG" top="5rem" left="5rem" />
          </Center>
        </Container>
      </MainContainer>
    </div>
  );
};

export default Blog;
