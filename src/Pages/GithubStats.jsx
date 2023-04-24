import { Box, Text, Heading, Img } from "@chakra-ui/react";
import React from "react";
import image2 from "../aboutBack2.png";
import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
  return (
    <Box p=" 30px 10%" backgroundImage={image2}>
      <Heading pb="30px" color=" #FF0080" align="center">
        GitHub Stats
      </Heading>
      <Box align="center">
        <Img
          src="https://github-readme-stats.vercel.app/api?username=SCjadhav21&theme=react&border_radius=4.6&show_icons=true&count_private=true&hide_border=true&show_icons=true"
          w={["90%", "", "70%"]}
        />
      </Box>
      <Box
        mt="40px"
        display="flex"
        flexDirection={["column", "", "row"]}
        gap={5}
        justifyContent="center"
        alignItems="center"
      >
        <Img
          src="https://streak-stats.demolab.com?user=SCjadhav21&_border=true&theme=dark&hide_border=true&theme=react"
          w={["70%", "", "50%"]}
        />
        <Img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=SCjadhav21&theme=react&border_radius=4.6&hide_border=true&layout=compact&show_icons=true"
          w={["70%", "", "50%"]}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        p="10px"
        bgColor="#1C2125"
        mt="30px"
        alignItems="center"
        color="#fff"
      >
        <Text color="#FF0080">Github Calendar</Text>
        <GitHubCalendar username="SCjadhav21" />
      </Box>
    </Box>
  );
};

export default GithubStats;
