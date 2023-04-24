import {
  Box,
  Heading,
  Hide,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import { Link as NavLink } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import "./Navbar.css";
import Skills from "../Pages/Skills";

const Navbar = () => {
  const [linkno, setLinkno] = useState(1);

  const handelClick = (p) => {
    setLinkno(p);
  };

  return (
    <>
      <Show above="md">
        {" "}
        <Box
          id="nav-menu"
          bgColor="#151716"
          height="80px"
          p="0px 10px"
          position="fixed"
          zIndex={10}
          color="#fff"
          // border="1px solid black"
          w="full"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          justifyItems="center"
        >
          <Box>
            <Heading
              id="user-detail-name"
              pl="30px"
              color="red"
              fontFamily="serif"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="extrabold"
            >
              SURAJ JADHAV
            </Heading>
          </Box>
          <Box
            fontFamily="serif"
            fontSize={21}
            pr="20px"
            w="60%"
            p="0px 5%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            justifyItems="center"
          >
            <NavLink
              className="nav-link home"
              activeClass="active"
              smooth
              spy
              id="home"
              to="home"
              style={{
                color: linkno === 1 ? "red" : "",
                borderBottom: linkno === 1 ? "3px solid red" : "",
              }}
              onClick={() => handelClick(1)}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link about"
              activeClass="active"
              smooth
              spy
              to="about"
              style={{
                color: linkno === 2 ? "red" : "",
                borderBottom: linkno === 2 ? "3px solid red" : "",
              }}
              onClick={() => handelClick(2)}
            >
              About
            </NavLink>

            <NavLink
              activeClass="active"
              smooth
              spy
              to="skills"
              className="nav-link skills"
              style={{
                color: linkno === 3 ? "red" : "",
                borderBottom: linkno === 3 ? "3px solid red" : "",
              }}
              onClick={() => handelClick(3)}
              // to="/skills"
            >
              Skills
            </NavLink>
            <NavLink
              className="nav-link projects"
              activeClass="active"
              smooth
              spy
              to="projects"
              style={{
                color: linkno === 4 ? "red" : "",
                borderBottom: linkno === 4 ? "3px solid red" : "",
              }}
              onClick={() => handelClick(4)}
            >
              Projects
            </NavLink>
            <NavLink
              className="nav-link contact"
              activeClass="active"
              smooth
              spy
              to="contact"
              onClick={() => handelClick(5)}
              style={{
                color: linkno === 5 ? "red" : "",
                borderBottom: linkno === 5 ? "3px solid red" : "",
              }}
            >
              Contact
            </NavLink>
            <a
              id="resume-link-1"
              className="nav-link resume"
              onClick={() => {
                handelClick(6);
                window.open(
                  "https://drive.google.com/file/d/1FhK5w52Bgf7-6-L-Xhv9Hrrn-B5eyyRL/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              style={{
                color: linkno === 6 ? "red" : "",
                borderBottom: linkno === 6 ? "3px solid red" : "",
              }}
              href="./SURAJ_JADHAV_Resume.pdf"
              download
            >
              Resume
            </a>
          </Box>
        </Box>
      </Show>
      <Hide above="md">
        <Box
          id="nav-menu"
          // style={{backgroundColor:back=="black"?"#5C6471:""}}
          position="fixed"
          pr="10px"
          zIndex={10}
          w="full"
          color="#fff"
          bgColor="#151716"
          height="80px"
          // border="1px solid black"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          justifyItems="center"
        >
          <Box>
            <Heading
              id="user-detail-name"
              pl="30px"
              color="red"
              fontFamily="serif"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="extrabold"
            >
              SURAJ JADHAV
            </Heading>
          </Box>
          <Box>
            {" "}
            <Menu>
              <MenuButton
                margin="10px"
                as={IconButton}
                aria-label="Options"
                color="red"
                borderColor="red"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList
                p="10px"
                bgGradient={[
                  "linear(to-tr, teal.300, yellow.400)",

                  "linear(to-b, orange.100, purple.300)",
                ]}
              >
                <MenuItem bgColor="black" margin={1}>
                  <NavLink
                    className="nav-link home"
                    activeClass="active"
                    smooth
                    spy
                    to="home"
                    onClick={() => handelClick(1)}
                    style={{ color: linkno === 1 ? "red" : "" }}
                  >
                    Home
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="black" margin={1}>
                  <NavLink
                    activeClass="active"
                    smooth
                    spy
                    to="about"
                    className="nav-link about"
                    onClick={() => handelClick(2)}
                    style={{ color: linkno === 2 ? "red" : "" }}
                  >
                    About
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="black" margin={1}>
                  <NavLink
                    className="nav-link skills"
                    activeClass="active"
                    smooth
                    spy
                    to="skills"
                    onClick={() => handelClick(3)}
                    style={{ color: linkno === 3 ? "red" : "" }}
                  >
                    Skills
                  </NavLink>
                </MenuItem>

                <MenuItem bgColor="black" margin={1}>
                  <NavLink
                    className="nav-link projects"
                    activeClass="active"
                    smooth
                    spy
                    to="projects"
                    onClick={() => handelClick(4)}
                    style={{ color: linkno === 4 ? "red" : "" }}
                  >
                    Projects
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="black" margin={1}>
                  <NavLink
                    activeClass="active"
                    smooth
                    spy
                    to="contact"
                    className="nav-link contact"
                    onClick={() => handelClick(5)}
                    style={{ color: linkno === 5 ? "red" : "" }}
                  >
                    Contact
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="black" margin={1}>
                  <a
                    id="resume-link-1"
                    className="nav-link resume"
                    onClick={() => {
                      handelClick(6);
                      window.open(
                        "https://drive.google.com/file/d/1FhK5w52Bgf7-6-L-Xhv9Hrrn-B5eyyRL/view?usp=sharing",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                    style={{
                      color: linkno === 6 ? "red" : "",
                    }}
                    href="./SURAJ_JADHAV_Resume.pdf"
                    download
                  >
                    Resume
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Hide>
      <Box id="home">
        <Home />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="skills">
        <Skills />
      </Box>

      <Box id="projects">
        <Projects />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
    </>
  );
};

export default Navbar;
