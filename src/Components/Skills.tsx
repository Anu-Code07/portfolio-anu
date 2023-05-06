import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/skills.scss";
import NavBar from "./Navbar";
import TS from "../assets/img/skills/TS.png";
import HTML from "../assets/img/skills/html2.jpg";
import JS from "../assets/img/skills/js.png";
import react from "../assets/img/skills/reactjs1.jpg";
import recoilimg from "../assets/img/skills/recoil.jpeg";
import uiux from "../assets/img/skills/uiux.jpg";

function Skills() {
  const url = useLocation();
  const pathname = url.pathname;

  return (
    <Box className={pathname === "/skills" ? "skills-bg" : "jump-up"}>
      {pathname === "/skills" ? <NavBar /> : ""}
      <Box className="container">
        <div>
          <Box className="skills-heading">
            <Typography variant="h2" sx={{}}>
              Skills and Experience
            </Typography>
            <Divider
              sx={{
                height: "4px",
                backgroundColor: "#61bffb",
                width: "40%",
                ml: 3,
              }}
            />
          </Box>
          <Grid
            container
            spacing={1}
            sx={{
              padding: "30px",
              justifyContent: "center",
            }}
            rowGap={2}
            className="Cardcontainer"
          >
            <Grid item xs={12} md={6} lg={4}>
              <div className="cards">
                <div className="front">
                  <img src={TS} alt="" />
                </div>
                <div className="back">
                  <h2 className="back-card-heading">Typescript</h2>
                  <div className="descp">
                    <p>
                      Having a strong foundation in JavaScript, I have embraced
                      TypeScript as it brings the benefits of static typing,
                      enhanced tooling, and improved code maintainability to my
                      development workflow.
                    </p>

                    <p>Skill Level : Intermediate</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="cards">
                <div className="front">
                  <img src={react} alt="" />
                </div>
                <div className="back">
                  <h2 className="back-card-heading">React</h2>
                  <div className="descp">
                    <p>
                      I am well-versed in React's core concepts like component
                      lifecycle, state management, and virtual DOM manipulation,
                      which enables me to build performant and responsive
                      applications. I have hands-on experience working with
                      React Router, and Material-UI, empowering me to build
                      robust and feature-rich applications.
                    </p>

                    <p>Skill Level : Intermediate</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="cards">
                <div className="front">
                  <img src={JS} alt="" />
                </div>
                <div className="back">
                  <h2 className="back-card-heading">Javascript</h2>
                  <div className="descp">
                    <p>
                      JavaScript is at the core of my development toolkit, and I
                      am proficient in both vanilla JavaScript and modern
                      frameworks like React
                    </p>

                    <p>Skill Level : Intermediate</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="cards">
                <div className="front">
                  <img src={HTML} alt="" />
                </div>
                <div className="back">
                  <h1 className="back-card-heading">HTML & CSS</h1>
                  <div className="descp">
                    <p>
                      HTML and CSS are the building blocks of the web, and I
                      have a deep understanding of both languages. I am
                      proficient in writing semantic and accessible HTML code
                      that adheres to best practices.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="cards">
                <div className="front">
                  <img src={recoilimg} alt="" />
                </div>
                <div className="back">
                  <h2 className="back-card-heading">Recoil</h2>
                  <div className="descp">
                    <p>
                      Recoil.js is a state management library for React that I
                      have extensively worked with. I am proficient in
                      implementing Recoil's atoms, selectors, and hooks to
                      efficiently manage complex application state.
                    </p>

                    <p>Skill Level : Intermediate</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="cards">
                <div className="front">
                  <img src={uiux} alt="" />
                </div>
                <div className="back">
                  <h1
                    className="back-card-heading
                  "
                  >
                    Back of Card
                  </h1>
                  <div className="descp">
                    <p>
                      I have a understanding of user-centered design principles
                      and creating wireframes and prototypes to ensure intuitive
                      and user-friendly interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
      <Box
        sx={{
          height: "200px",
        }}
      ></Box>
    </Box>
  );
}

export default Skills;
