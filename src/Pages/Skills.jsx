import React from "react";
import { Box, Button, Img, SimpleGrid, useColorMode } from "@chakra-ui/react";
import image from "../aboutBack.png";

import html from "../Images/Skill_Icon/html.png";
import css from "../Images/Skill_Icon/css.png";
import js from "../Images/Skill_Icon/javascript.png";
import react from "../Images/Skill_Icon/react.png";
import redux from "../Images/Skill_Icon/redux.png";
import chakra from "../Images/Skill_Icon/chakra.png";

import git from "../Images/Skill_Icon/git.png";
import dsa from "../Images/Skill_Icon/DSA.png";
import nodejs from "../Images/Skill_Icon/nodeJs.png";
import nextjs from "../Images/Skill_Icon/nextJs.png";

import colaborative from "../Images/Skill_Icon/colaborative.png";
import creativethinking from "../Images/Skill_Icon/creativethinking.png";
import timemanegment from "../Images/Skill_Icon/timemanegment.png";
import projectManegment from "../Images/Skill_Icon/projectManegment.png";
import problemSolving from "../Images/Skill_Icon/problemSolving.png";

// import netlify from "../Images/Skill_Icon/netlify.png";
import "./skills.css";

import { useState } from "react";
import GithubStats from "./GithubStats";

export const Skills = () => {
  const [btn, setBtn] = useState("all");

  let skills_data = [
    {
      url: html,
      name: "HTML",

      category: "tech stack",
    },

    {
      url: css,
      name: "CSS",

      category: "tech stack",
    },

    {
      url: js,
      name: "JavaScript",

      category: "tech stack",
    },

    {
      url: react,
      name: "React",

      category: "tech stack",
    },

    {
      url: redux,
      name: "Redux",

      category: "tech stack",
    },

    {
      url: chakra,
      name: "Chakra UI",
      category: "tech stack",
    },

    {
      url: nodejs,
      name: "Node JS",
      category: "tech stack",
      category2: "backend",
    },

    {
      url: nextjs,
      name: "Next",
      category: "tech stack",
      category2: "backend",
    },

    {
      url: git,
      name: "Git",
      category: "tech stack",
      category2: "backend",
    },

    // {
    //   url: netlify,
    //   name: "Netlify",
    //   category: "tech stack",
    //   category2: "backend",
    // },

    {
      url: dsa,
      name: "DSA",
      category: "tech stack",
      category2: "backend",
    },
    {
      url: creativethinking,
      name: "Creative Thinking",
      category: "Soft Skill",
    },
    {
      url: problemSolving,
      name: "Problem Solving",
      category: "Soft Skill",
    },
    {
      url: colaborative,
      name: "Collaborative",
      category: "Soft Skill",
    },
    {
      url: projectManegment,
      name: "Project Management",
      category: "Soft Skill",
    },
    {
      url: timemanegment,
      name: "Time Tanagement",
      category: "Soft Skill",
    },
  ];

  const [skills, setSkills] = useState(skills_data);

  const handleAll = () => {
    setSkills(skills_data);
    setBtn("all");
  };

  const handleTechStack = () => {
    let data = skills_data.filter((elem, index) => {
      return elem.category === "tech stack";
    });

    setSkills(data);
    setBtn("techStack");
  };

  const handleSoftSkill = () => {
    let data = skills_data.filter((elem, index) => {
      return elem.category === "Soft Skill";
    });

    setSkills(data);
    setBtn("softSkill");
  };

  // console.log(skills);

  return (
    <>
      <Box
        p="50px 40px"
        backgroundImage={image}
        className="skills_container"
        id="skills"
      >
        <Box
          gap="5px"
          p="20px 0px"
          display="flex"
          color="#FF0080"
          justifyContent="center"
          fontSize="32px"
          fontWeight="bold"
          className="skills_heading"
        >
          <h2>
            Tech <span style={{ color: "#fff" }}>Stack</span> & Soft
            <span style={{ color: "#fff" }}> Skill</span>
          </h2>
        </Box>

        <Box className="skills_btn">
          <Button
            fontSize="20px"
            p="20px"
            marginEnd="10px"
            border="2px solid black"
            onClick={handleAll}
            style={{
              backgroundColor: btn === "all" ? "red" : "#EBE2DD",
              color: btn === "all" ? "#fff" : "red",
            }}
          >
            All
          </Button>
          <Button
            fontSize="20px"
            p="20px"
            bg="black"
            marginEnd="10px"
            border="2px solid black"
            onClick={handleTechStack}
            style={{
              backgroundColor: btn === "techStack" ? "red" : "#EBE2DD",
              color: btn === "techStack" ? "#fff" : "red",
            }}
          >
            Tech Stack
          </Button>
          <Button
            marginEnd="10px"
            fontSize="20px"
            p="20px"
            border="2px solid black"
            onClick={handleSoftSkill}
            style={{
              backgroundColor: btn === "softSkill" ? "red" : "#EBE2DD",
              color: btn === "softSkill" ? "#fff" : "red",
            }}
          >
            Soft Skill
          </Button>
        </Box>

        <Box m="auto" mt="40px" w="80%" className="skills_grid">
          <SimpleGrid columns={[2, 3, 4, 5]} spacing="30px">
            {skills?.map((elem, index) => (
              <Box key={index}>
                <Box>
                  <Box
                    key={elem.name}
                    display="flex"
                    justifyContent="center"
                    justifyItems="center"
                  >
                    <Img
                      className="SkillImage"
                      // borderRadius="50px"
                      height="110px"
                      w="70%"
                      borderRadius="10px"
                      src={elem.url}
                      alt="skills_logo"
                    />
                  </Box>

                  <Box
                    fontSize="25px"
                    fontWeight="bold"
                    color="#fff"
                    p="10px 0px"
                  >
                    <h3>{elem.name}</h3>
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <GithubStats />
    </>
  );
};
export default Skills;
