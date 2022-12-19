import React from "react";
import { Box, Img, SimpleGrid, Text, useColorMode } from "@chakra-ui/react";
import style from "./project.css";
import indeed from "../Images/project/Indded.com.png";
import shop from "../Images/project/ssence.com.png";
import food from "../Images/project/zappos.png";
// import { FaGithub, FaEye } from "react-icons/fa";

const Projects = () => {
  return (
    <Box p="50px" id="project">
      <Box width="80%" margin="auto">
        <Box
          gap="5px"
          p="20px 0px"
          display="flex"
          color=" #FF0080"
          justifyContent="center"
          fontSize={["20px", "", "30px"]}
          fontWeight="bold"
        >
          My<Text color="black"> Creative</Text> Projects{" "}
          <Text color=" black"> Section</Text>
        </Box>

        <div className="project_grid">
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px" margin="auto">
            <Box>
              <div className="project_box">
                <Box
                  display="flex"
                  justifyContent="center"
                  className="project_image"
                >
                  <img src={shop} alt="clockify" />
                </Box>

                <div className="project_name">
                  <h2>
                    S-SENSE<p></p>(Individual Project)
                  </h2>
                </div>
                <div className="project_desc">
                  <p>
                    This app is a Fashon-Wear app of Mens and Womens and we can
                    buy the Products from this app to our selected location.
                  </p>
                </div>
                <Box
                  display="flex"
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                  pt="10px"
                  className="project_tech_stack"
                >
                  <h5>
                    <span>Tech Stack :</span> React-js, JavaScript, CSS, axios,
                    Chakra UI.
                  </h5>
                </Box>

                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/SCjadhav21/SCjadhav21-ssense.com-clone"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <img
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://project-sscence-mu.vercel.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/159/159078.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div className="project_box">
                <Box
                  display="flex"
                  justifyContent="center"
                  className="project_image"
                >
                  <Img src={indeed} alt="clockify" />
                </Box>

                <div className="project_name">
                  <h2>
                    Indeed.com <p></p> (Group project)
                  </h2>
                </div>
                <div className="project_desc">
                  <p>
                    This website provides a job for jobseakers, a user can
                    search a job as per his requirements like JobRole and where
                    user want to search JobRole(location), If create a Employed
                    account in site then user can Add the JobData in app.
                  </p>
                </div>

                <Box
                  display="flex"
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                  pt="10px"
                  className="project_tech_stack"
                >
                  <h5>
                    <span>Tech Stack :</span> JavaScript, Html, CSS,
                  </h5>
                </Box>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/akshaykadu24/indeed.com-clone"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <img
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://deft-florentine-9618bc.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/159/159078.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
            <Box>
              <div className="project_box">
                <Box
                  display="flex"
                  justifyContent="center"
                  className="project_image"
                >
                  <Img src={food} alt="food" />
                </Box>

                <div className="project_name">
                  <h2>
                    Zappos.com <p></p> (Group project)
                  </h2>
                </div>
                <div className="project_desc">
                  <p>
                    Zappos.com is an e-commerce website, where users can buy
                    shoes, clothing, handbags, accessories, and more.
                  </p>
                </div>
                <Box
                  display="flex"
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                  pt="10px"
                  className="project_tech_stack"
                >
                  <h5>
                    <span>Tech Stack :</span> JavaScript,Html, CSS,
                  </h5>
                </Box>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sanajitjana/Masai-Zappos-Army"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <img
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://masai-zappos-clone.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/159/159078.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </Box>
    </Box>
  );
};

export default Projects;
