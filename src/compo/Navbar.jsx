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
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import "./Navbar.css";
import Skills from "../Pages/Skills";

const Navbar = () => {
  const [linkno, setLinkno] = useState(1);
  const [back, setBack] = useState(0);
  const handelClick = (p) => {
    setLinkno(p);
  };

  window.addEventListener("scroll", (event) => {
    setBack(1);
  });

  return (
    <>
      <Show above="md">
        {" "}
        <Box
          // bgColor={back}
          style={{
            backgroundColor: back === 1 ? "#151716" : "",
            height: back === 1 ? "80px" : "100px",
          }}
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
              className="navlink"
              style={{
                color: linkno === 1 ? "red" : "",
                borderBottom: linkno === 1 ? "3px solid red" : "",
              }}
              onClick={() => handelClick(1)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="navlink"
              style={{
                color: linkno === 2 ? "red" : "",
                borderBottom: linkno === 2 ? "3px solid red" : "",
              }}
              onClick={() => handelClick(2)}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="navlink"
              style={{
                color: linkno === 3 ? "red" : "",
                borderBottom: linkno === 3 ? "3px solid red" : "",
              }}
              onClick={() => handelClick(3)}
              to="/skills"
            >
              Skills
            </NavLink>
            <NavLink
              className="navlink"
              style={{
                color: linkno === 4 ? "red" : "",
                borderBottom: linkno === 4 ? "3px solid red" : "",
              }}
              onClick={() => handelClick(4)}
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className="navlink"
              onClick={() => handelClick(5)}
              style={{
                color: linkno === 5 ? "red" : "",
                borderBottom: linkno === 5 ? "3px solid red" : "",
              }}
              to="/contact"
            >
              Contact
            </NavLink>
            <a
              className="navlink"
              onClick={() => handelClick(6)}
              style={{
                color: linkno === 6 ? "red" : "",
                borderBottom: linkno === 6 ? "3px solid red" : "",
              }}
              href="https://drive.google.com/file/d/130lzJxVjCRQCx5d22QGaEQVVJ912SYRw/view?usp=sharing"
            >
              Resume
            </a>
          </Box>
        </Box>
      </Show>
      <Hide above="md">
        <Box
          // style={{backgroundColor:back=="black"?"#5C6471:""}}
          position="fixed"
          pr="10px"
          zIndex={10}
          w="full"
          color="#fff"
          style={{
            backgroundColor: back === 1 ? "#151716" : "",
            height: back === 1 ? "80px" : "100px",
          }}
          // border="1px solid black"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          justifyItems="center"
        >
          <Box>
            <Heading
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
                    className="navlink2"
                    onClick={() => handelClick(1)}
                    style={{ color: linkno === 1 ? "red" : "" }}
                    to="/"
                  >
                    Home
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="black" margin={1}>
                  <NavLink
                    className="navlink2"
                    onClick={() => handelClick(2)}
                    style={{ color: linkno === 2 ? "red" : "" }}
                    to="/about"
                  >
                    About
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="black" margin={1}>
                  <NavLink
                    className="navlink2"
                    onClick={() => handelClick(3)}
                    style={{ color: linkno === 3 ? "red" : "" }}
                    to="/skills"
                  >
                    Skills
                  </NavLink>
                </MenuItem>

                <MenuItem bgColor="black" margin={1}>
                  <NavLink
                    className="navlink2"
                    onClick={() => handelClick(4)}
                    style={{ color: linkno === 4 ? "red" : "" }}
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="black" margin={1}>
                  <NavLink
                    className="navlink2"
                    onClick={() => handelClick(5)}
                    style={{ color: linkno === 5 ? "red" : "" }}
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </MenuItem>
                <MenuItem bgColor="black" margin={1}>
                  <a
                    className="navlink"
                    onClick={() => handelClick(6)}
                    style={{
                      color: linkno === 6 ? "red" : "",
                      borderBottom: linkno === 6 ? "3px solid red" : "",
                    }}
                    href="https://drive.google.com/file/d/130lzJxVjCRQCx5d22QGaEQVVJ912SYRw/view?usp=sharing"
                  >
                    Resume
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Hide>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Navbar;
