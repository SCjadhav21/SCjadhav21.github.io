import "./Contact.css";
import {
  Box,
  Button,
  Img,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import image from "../background2.png";
import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <Box
      backgroundImage={image}
      fontFamily={["Poppins", "sans-serif"]}
      width="100%"
      margin="auto"
      padding="70px 0"
      id="contact"
    >
      <Box width="85%" margin="auto">
        <Box marginBottom="70px" textAlign="center">
          <Text fontSize="30px" fontWeight="bold" color="#fff">
            Con<span style={{ color: "#FF0080" }}>tact</span>
            <span></span>
          </Text>
        </Box>

        <Box>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing="50px">
            <Box>
              <Box className="contact_image" pt={["0px", "", "80px"]}>
                <Img
                  src="https://mohit-portfolio.vercel.app/assets/contact.f495edec.svg"
                  alt="Contact"
                />
              </Box>
            </Box>
            <Box>
              <Box width="80%" margin="auto">
                <Box className="contact_icon">
                  <SimpleGrid columns={[1, 2, 2, 2]} spacing="20px">
                    <Box className="icon_box">
                      <a
                        href="https://www.linkedin.com/in/suraj-jadhav-b99446233/"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <Box className="icon" id="icon1">
                          {/* <FaLinkedin /> */}
                          <h3>LinkedIn</h3>
                        </Box>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a
                        href="https://github.com/SCjadhav21"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <Box className="icon" id="icon2">
                          {/* <FaGithub /> */}
                          <h3>GitHub</h3>
                        </Box>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a
                        href="mailto:jadhavsuraj4567@gmail.com"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <Box className="icon" id="icon3">
                          {/* <FiMail /> */}
                          <h3>Gmail</h3>
                        </Box>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a
                        href="https://wa.me/8830637124"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <Box className="icon" id="icon5">
                          {/* <AiOutlineWhatsApp /> */}
                          <h3>WhatsApp</h3>
                        </Box>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a href="" rel="noopener norefferer" target="_blank">
                        <Box className="icon" id="icon4">
                          {/* <BiPhoneCall /> */}
                          <h3>8830637124</h3>
                        </Box>
                      </a>
                    </Box>
                  </SimpleGrid>
                </Box>

                <Box textAlign="center">
                  <form ref={form} onSubmit={sendEmail}>
                    <Box>
                      <Input
                        color="#fff"
                        required={true}
                        name="user_name"
                        className="input_tag"
                        type="text"
                        placeholder="Full Name"
                      />
                    </Box>
                    <Box>
                      <Input
                        color="#fff"
                        required={true}
                        name="user_email"
                        className="input_tag"
                        type="text"
                        placeholder="Email"
                      />
                    </Box>
                    <Box>
                      <Input
                        color="#fff"
                        required={true}
                        className="input_tag"
                        type="number"
                        placeholder="Number"
                      />
                    </Box>
                    <Box className="input_message">
                      <Textarea
                        color="#fff"
                        mb="15px"
                        required={true}
                        name="message"
                        height=" 150px"
                        marginTop="20px"
                        borderRadius="10px"
                        paddingLeft="20px"
                        border="1px solid rgb(207, 205, 205)"
                        cursor="text"
                        type="text"
                        placeholder="Your Message"
                      />
                    </Box>
                    <Box>
                      <Button
                        type="submit"
                        height="45px"
                        width="90%"
                        backgroundColor="#e4002b"
                        margin-top="20px"
                        color="#fff"
                        fontSize="18px"
                        fontWeight="600"
                        borderRadius="20px"
                        className="input_btn"
                      >
                        Send Message
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <br />
      <Box className="footer" style={{ textAlign: "center" }}>
        <span style={{ fontSize: "20px", color: "red", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          {/* <Typewriter */}
          Made with 💗 by Suraj Jadhav
          {/* loop={5000000000}
          cursor cursorStyle="|" typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={2000} */}
          {/* // onLoopDone={handleDone} */}
          {/* // onType={handleType} */}
        </span>
      </Box>
    </Box>
  );
};

export default Contact;
