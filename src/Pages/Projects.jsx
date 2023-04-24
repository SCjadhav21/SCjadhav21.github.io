import React from "react";
import { Box, Img, SimpleGrid, Text, useColorMode } from "@chakra-ui/react";
import style from "./project.css";
import indeed from "../Images/project/Indded.com.png";
import shop from "../Images/project/ssence.com.png";
import food from "../Images/project/zappos.png";
import ShopQ_mart from "../Images/project/ShopQ_Mart.png";
import FoodHub from "../Images/project/Food_Hub.png";

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

        <Box className="project_grid">
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px" margin="auto">
            <Box>
              <Box className="project_box" h={["", "", "700", "650"]}>
                <Box
                  display="flex"
                  justifyContent="center"
                  className="project-card"
                >
                  <Img src={ShopQ_mart} alt="ShoQ_mart" />
                </Box>

                <Box className="project_name">
                  <h2 className="project-title">
                    ShopQ_Mart <p></p> (Group project)
                  </h2>
                </Box>
                <Box className="project_desc">
                  <p className="project-description">
                    ShopQ_Mart is an Indian online marketplace, also India's
                    first e-commerce market that connects sellers and buyers
                    online and offers a trusted and safe online environment for
                    shopping.
                  </p>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                  pt="10px"
                  className="project_tech_stack"
                >
                  <h5 className="project-tech-stack">
                    <span>Tech Stack :</span> React, Nodejs, Javascript,
                    Express, Html5, Mongodb, Css3, Mongoose, Cyclic, Readux,
                    Chakra-UI, Vercel
                  </h5>
                </Box>
                <Box className="project_icon">
                  <Box className="github_link">
                    <a
                      className="project-github-link"
                      href="https://github.com/SCjadhav21/Project_ShopQ_Mart"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <Img
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                        alt=""
                      />
                    </a>
                  </Box>
                  <Box className="deploy_link">
                    <a
                      className="project-deployed-link"
                      href="https://shopqmart.vercel.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <Img
                        src="https://cdn-icons-png.flaticon.com/512/159/159078.png"
                        alt=""
                      />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box className="project_box" h={["", "", "700", "650"]}>
                <Box
                  display="flex"
                  justifyContent="center"
                  className="project-card"
                >
                  <Img src={FoodHub} alt="FoodHub" />
                </Box>

                <Box className="project_name">
                  <h2 className="project-title">
                    Food_Hub <p></p> (Group project)
                  </h2>
                </Box>
                <Box className="project_desc">
                  <p className="project-description">
                    Food Hub.com leading meat-free lifestyle platform, indulging
                    you with delicious discounted vegetarian and vegan meals at
                    popular restaurants and cafes. Experience a tasty, healthy ,
                    and compassionate meatless dining experience now!
                  </p>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                  pt="10px"
                  className="project_tech_stack"
                >
                  <h5 className="project-tech-stack">
                    <span>Tech Stack :</span> Javascript, Html5, Css3, Reactjs ,
                    Chakra-UI, Vercel, Netlify
                  </h5>
                </Box>
                <Box className="project_icon">
                  <Box className="github_link">
                    <a
                      className="project-github-link"
                      href="https://github.com/SCjadhav21/Project_Food_Hub"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <Img
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                        alt=""
                      />
                    </a>
                  </Box>
                  <Box className="deploy_link">
                    <a
                      className="project-deployed-link"
                      href="https://iridescent-biscochitos-61ac19.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <Img
                        src="https://cdn-icons-png.flaticon.com/512/159/159078.png"
                        alt=""
                      />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box className="project_box" h={["", "", "700", "650"]}>
                <Box
                  display="flex"
                  justifyContent="center"
                  className="project-card"
                >
                  <Img src={shop} alt="clockify" />
                </Box>

                <Box className="project_name">
                  <h2 className="project-title">
                    S-SENSE<p></p>(Individual Project)
                  </h2>
                </Box>
                <Box className="project_desc">
                  <p className="project-description">
                    This app is a Fashion-Wear app for men and women, and we can
                    buy the Products from this app at our selected location.
                  </p>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                  pt="10px"
                  className="project_tech_stack"
                >
                  <h5 className="project-tech-stack">
                    <span>Tech Stack :</span> React-js, JavaScript, CSS, axios,
                    Chakra UI.
                  </h5>
                </Box>

                <Box className="project_icon">
                  <Box className="github_link">
                    <a
                      className="project-github-link"
                      href="https://github.com/SCjadhav21/SCjadhav21-ssense.com-clone"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <Img
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                        alt=""
                      />
                    </a>
                  </Box>
                  <Box className="deploy_link">
                    <a
                      className="project-deployed-link"
                      href="https://project-sscence.vercel.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <Img
                        src="https://cdn-icons-png.flaticon.com/512/159/159078.png"
                        alt=""
                      />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box className="project_box" h={["", "", "700", "650"]}>
                <Box
                  display="flex"
                  justifyContent="center"
                  className="project-card"
                >
                  <Img src={indeed} alt="clockify" />
                </Box>

                <Box className="project_name">
                  <h2 className="project-title">
                    Indeed.com <p></p> (Group project)
                  </h2>
                </Box>
                <Box className="project_desc">
                  <p className="project-description">
                    This website provides a job for job seekers, a user can
                    Search for a job as per his requirements like JobRole and
                    where user want to search JobRole(location), If create a
                    Employed account in the site then the user can Add the
                    JobData in the app
                  </p>
                </Box>

                <Box
                  display="flex"
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                  pt="10px"
                  className="project_tech_stack"
                >
                  <h5 className="project-tech-stack">
                    <span>Tech Stack :</span> JavaScript, Html, CSS,
                  </h5>
                </Box>
                <Box className="project_icon">
                  <Box className="github_link">
                    <a
                      className="project-github-link"
                      href="https://github.com/akshaykadu24/indeed.com-clone"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <Img
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                        alt=""
                      />
                    </a>
                  </Box>
                  <Box className="deploy_link">
                    <a
                      className="project-deployed-link"
                      href="https://deft-florentine-9618bc.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <Img
                        src="https://cdn-icons-png.flaticon.com/512/159/159078.png"
                        alt=""
                      />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box className="project_box" h={["", "750", "650"]}>
                <Box
                  display="flex"
                  justifyContent="center"
                  className="project-card"
                >
                  <Img src={food} alt="food" />
                </Box>

                <Box className="project_name">
                  <h2 className="project-title">
                    Zappos.com <p></p> (Group project)
                  </h2>
                </Box>
                <Box className="project_desc">
                  <p className="project-description">
                    Zappos.com is an e-commerce website, where users can buy
                    shoes, clothing, handbags, accessories, and more.
                  </p>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  justifyItems="center"
                  alignItems="center"
                  pt="10px"
                  className="project_tech_stack"
                >
                  <h5 className="project-tech-stack">
                    <span>Tech Stack :</span> JavaScript,Html, CSS,
                  </h5>
                </Box>
                <Box className="project_icon">
                  <Box className="github_link">
                    <a
                      className="project-github-link"
                      href="https://github.com/sanajitjana/Masai-Zappos-Army"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <Img
                        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                        alt=""
                      />
                    </a>
                  </Box>
                  <Box className="deploy_link">
                    <a
                      className="project-deployed-link"
                      href="https://masai-zappos-clone.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <Img
                        src="https://cdn-icons-png.flaticon.com/512/159/159078.png"
                        alt=""
                      />
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
