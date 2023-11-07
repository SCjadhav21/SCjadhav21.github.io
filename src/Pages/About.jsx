// import { HStack, Img, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Box, HStack, Img, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

import image from "../sj2.png";
import image2 from "../aboutBack2.png";
const About = () => {
  const [btn, setBtn] = useState(false);
  const handleAbourMe = () => {
    setBtn(true);
  };
  const handleExperience = () => {
    setBtn(false);
  };

  return (
    <Box id="about" p="50px" backgroundImage={image2}>
      <Box
        gap="5px"
        p="20px 0px"
        display="flex"
        justifyContent="center"
        fontSize={["20px", "", "30px"]}
        fontWeight="bold"
      >
        All<Text color=" #FF0080"> About</Text> Me And My{" "}
        <Text color=" #FF0080"> Experience</Text>
      </Box>

      <Box display="flex" flexDirection={["column", "", "row"]}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          w={["full", "full", "40%"]}
        >
          <Img
            className="home-img"
            border="2px solid red"
            borderRadius="5%"
            color={"red"}
            h="380px"
            src={image}
          ></Img>
        </Box>
        <Box w={["full", "full", "60%"]} p="20px 7%">
          <Box>
            <Button
              style={{
                backgroundColor: btn ? "red" : "",
                color: btn ? "#fff" : "",
              }}
              marginEnd="10px"
              bg="transparent"
              border="2px solid black"
              onClick={handleAbourMe}
            >
              About Me
            </Button>
            <Button
              style={{
                backgroundColor: btn ? "" : "red",
                color: btn ? "" : "#fff",
              }}
              bg="transparent"
              hover="red"
              border="2px solid black"
              onClick={handleExperience}
            >
              Experience
            </Button>
          </Box>
          {btn ? (
            <Box p="20px 0px">
              <Box>
                <ul id="user-detail-intro">
                  <li style={{ margin: "20px 0px" }}>
                    Hello! I am Suraj Jadhav and I enjoy creating things that
                    live on the internet.
                  </li>
                  <li style={{ margin: "20px 0px" }}>
                    I'm a passionate Mern and Mean Developer, with strong
                    administrative and communication skills, good attention to
                    detail, and the ability to write efficient code using MERN
                    Stack.
                  </li>
                  <li style={{ margin: "20px 0px" }}>
                    My interest in web development started back last year when I
                    was trying to edit things on the web, which thought me a lot
                    about HTML& CSS.
                  </li>
                  <li style={{ margin: "20px 0px" }}>
                    Fast Forwarding to today, I built several web applications
                    and major projects. Learned a great deal about teamwork,
                    leadership, and communication. After months of rigorous
                    training, here l am looking for an opportunity as a full
                    stack web developer.
                  </li>
                </ul>
              </Box>
            </Box>
          ) : (
            <Box p=" 30px 10%">
              <Box>
                <Box>
                  <HStack p={0} justify="center" data-aos="fade-up">
                    <SimpleGrid columns={[1, 1, 2, 2]} spacing={7}>
                      <HStack spacing={5}>
                        <Img
                          boxSize="40px"
                          src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-1.svg"
                          alt="icon"
                        />
                        <Text>2000+ Hours Practical Coding</Text>
                      </HStack>
                      <HStack spacing={5}>
                        <Img
                          boxSize="40px"
                          src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-2.svg"
                          alt="icon"
                        />
                        <Text>400+ Hours Data Structures & Algorithms</Text>
                      </HStack>
                      <HStack spacing={5}>
                        <Img
                          boxSize="40px"
                          src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-3.svg"
                          alt="icon"
                        />
                        <Text>200+ Hours Soft Skill Development</Text>
                      </HStack>
                      <HStack spacing={5}>
                        <Img
                          boxSize="40px"
                          src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-4.svg"
                          alt="icon"
                        />
                        <Text>500+ Hours Math & Logic</Text>
                      </HStack>
                      <HStack spacing={5}>
                        <Img
                          boxSize="40px"
                          rounded="10px"
                          src="https://play-lh.googleusercontent.com/9zvNJHedNg_6lOdwcodODMVsyeHKxuTIpnbBzomRGGZAp_vKVXnd5SlF8XZcXyGYjQ"
                          alt="git-commit"
                        />
                        <Text>500+ DSA Problems solved</Text>
                      </HStack>
                      <HStack spacing={5}>
                        <Img
                          boxSize="40px"
                          src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-5.svg"
                          alt="icon"
                        />
                        <Text>20+ Mini Projects</Text>
                      </HStack>
                      <HStack spacing={5}>
                        <Img
                          boxSize="40px"
                          src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-6.svg"
                          alt="icon"
                        />
                        <Text>5+ Major Projects</Text>
                      </HStack>

                      <HStack spacing={5}>
                        <Img
                          boxSize="40px"
                          rounded="10px"
                          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                          alt="git-commit"
                        />
                        <Text>400+ Contributions in the last five months</Text>
                      </HStack>
                    </SimpleGrid>
                  </HStack>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
