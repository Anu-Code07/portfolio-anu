import {
  Box,
  Typography,
  Grid,
  Divider,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
import React from "react";
import NavBar from "./Navbar";

import { useLocation } from "react-router-dom";
import "../styles/projects.scss";
import Movie from "../assets/img/skills/movie.jpg";
import Todo from "../assets/img/todoapp.png";
import Budget from "../assets/img/Budget.png";
function Projects() {
  const url = useLocation();
  const pathname = url.pathname;
  return (
    <Box className={pathname === "/projects" ? "p-bg" : "jump"}>
      {pathname === "/projects" ? <NavBar /> : ""}
      <Box className="project-heading">
        <Typography variant="h2" sx={{}}>
          Projects
        </Typography>
        <Divider
          sx={{
            height: "4px",
            backgroundColor: "#61bffb",
            width: "20%",
            ml: 3,
            mt: 1,
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
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={Movie} alt="movie" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Movie app
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Search and save your favourite movies and even find your
                favourite actor
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => {}} variant="text">
                <Link
                  href="https://anu-code07.github.io/Movie-app/#/"
                  target={"_blank"}
                >
                  {" "}
                  Live Demo
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={Todo} alt="movie" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Todo List
              </Typography>
              <Typography variant="body2" color="text.secondary">
                What's special about a todo list you ask? Well its made with
                <b> Recoil.js</b>, a global state management libary
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => {}} variant="text">
                <Link
                  href="https://todo-peach-eta.vercel.app/"
                  target={"_blank"}
                >
                  {" "}
                  Live Demo
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={Budget}
              alt="budget"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Todo List
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage your Expenses with Ease
                <b> Budget app made with Context API</b>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => {}} variant="text">
                <Link
                  href="https://budget-app-ten-tau.vercel.app/"
                  target={"_blank"}
                >
                  {" "}
                  Live Demo
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          height: "200px",
        }}
      ></Box>
    </Box>
  );
}

export default Projects;
