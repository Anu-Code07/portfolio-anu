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
import { motion as m } from "framer-motion";
function Skills() {
  const url = useLocation();
  const pathname = url.pathname;

  return (
  <m.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      exit={{ opacity: 0, x: -100 }}
    >
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
              }}
              rowGap={2}
              className="Cardcontainer"
            >
              <Grid item xs={4}>
                <div className="cards">
                  <div className="front">
                    <img src={TS} alt="" />
                  </div>
                  <div className="back">
                    <h2>Typescript</h2>
              <div className="descp">
                  <p>Proficient in TypeScript with experience developing TypeScript applications using React</p>
       
                  <p>Skill Level : Intermediate</p>
                  <p>Projects: Enterpise Level Dashboards</p>
                  </div>
        
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
               
                <div className="cards">
                  <div className="front">
                    <img src={react} alt="" />
                  </div>
                  <div className="back">
                       <h2>React</h2>
              <div className="descp">
                  <p>I have great love for React I love how easy and simple it is to use  </p>
       
                  <p>Skill Level : Intermediate</p>
                  <p>Projects: Enterpise Level Dashboards</p>
                  </div>
                  </div>
                </div>
             
              </Grid>
              <Grid item xs={4} rowGap={2}>
                <div className="cards">
                  <div className="front">
                    <img src={JS} alt="" />
                  </div>
                  <div className="back">
                        <h2>Javascript</h2>
                   <div className="descp">
                  <p>I have loving relationship with JS, have been working on ever since started programming </p>
       
                  <p>Skill Level : Intermediate</p>
                  <p>Projects: Enterpise Level Dashboards</p>
                  </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="cards">
                  <div className="front">
                    <img src={HTML} alt="" />
                  </div>
                  <div className="back">
                    <h1>Back of Card</h1>
                    <p>Hey</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="cards">
                  <div className="front">
                    <img src={recoilimg} alt="" />
                  </div>
                  <div className="back">
                        <h2>Recoil</h2> 
                    <div className="descp">
                  <p>Proficient in using Recoil as state  management Library developed by Facebook </p>
       
                  <p>Skill Level : Intermediate</p>
                  <p>Projects: Enterpise Level Dashboards</p>
                  </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="cards">
                  <div className="front">
                    <img src={uiux} alt="" />
                  </div>
                  <div className="back">
                    <h1>Back of Card</h1>
                    <p>Hey</p>
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
    </m.div>
  );
}

export default Skills;
