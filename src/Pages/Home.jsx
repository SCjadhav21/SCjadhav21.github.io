import { Box, Text, Image, Button, Link } from "@chakra-ui/react";
import React from "react";
import "./Home.css";
import image from "../background2.png";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Box
        // position="relative"
        backgroundImage={image}
        paddingTop="90px"
        height="750px"
        w="full"
        // bgColor="#F7E3CC"
        // border="2px solid red"
      >
        <Box mt="90px" p="20px" w="72%">
          <Text display="flex" justifyContent="center" alignItems="center">
            ""
            <Image
              alignSelf="center"
              pt="10px"
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=30&pause=1000&color=8230C6&width=435&lines=Hey!+It's+Suraj+Jadhav!;Full+Stack+Web+Developer;A+Good+problemSolver"
              alt=""
            />
          </Text>
          <Text
            color="#fff"
            fontFamily="serif"
            fontSize={["30px", "30px", "40px"]}
          >
            Hello, I'am a
          </Text>

          <Text
            color="#fff"
            fontFamily="cursive"
            // fontWeight="bold"
            fontSize={["50px", "50px", "70px"]}
          >
            Full Stack
          </Text>
          <Text
            color="#fff"
            fontFamily="cursive"
            // fontWeight="bold"
            fontSize={["50px", "50px", "70px"]}
          >
            Web Developer
          </Text>

          <a id="resume-link-2" href="./SURAJ_JADHAV_Resume.pdf" download>
            <Button
              color="#fff"
              fontSize="20px"
              mt="20px"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              h={["40px", "50px", "50px"]}
              w={["150px", "200px", "200px"]}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1FhK5w52Bgf7-6-L-Xhv9Hrrn-B5eyyRL/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Resume
            </Button>
          </a>
        </Box>
      </Box>
    </>
  );
}

export default Home;
