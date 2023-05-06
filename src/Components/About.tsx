import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import NavBar from "./Navbar";
import "../styles/about.scss";
import Anu from "../assets/img/anu.jpeg";
import { useLocation } from "react-router-dom";

function About() {
  const url = useLocation();
  const pathname = url.pathname;
  return (
    <div className={pathname === "/about" ? "abg" : "jump-up"}>
      {pathname === "/about" ? <NavBar /> : ""}
      <Box className="about" sx={{}}>
        <Box className="img-container">
          <div className="card-bg"></div>
          <div className="card">
            <img src={Anu} alt="image" className="me" />
          </div>
        </Box>
        <Box className="text-container">
          <Typography
            variant="h2"
            sx={{
              textAlign: "left",
              mb: 2,
            }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              width: "85%",
              textAlign: "justify",
            }}
          >
            <List>
              <ListItem>
                <Typography variant="body1">
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "24px",
                      color: "#61bffb",
                    }}
                  >
                    Hi
                  </span>
                  , I'm Anurag, a passionate and creative front-end developer
                  crafting user-friendly and visually appealing web experiences.
                  With a strong foundation in HTML, CSS, and JavaScript and
                  React, I specialize in translating design concepts into
                  functional and responsive websites. In addition to my
                  technical skills, I have a keen eye for design aesthetics and
                  a deep understanding of user experience principles.
                </Typography>
              </ListItem>
              <ListItem></ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <Box className="skills"></Box>
    </div>
  );
}

export default About;
