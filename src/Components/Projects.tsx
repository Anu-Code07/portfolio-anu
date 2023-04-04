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
import { motion as m } from "framer-motion";
import { useLocation } from "react-router-dom";
import "../styles/projects.scss";
import Movie from "../assets/img/skills/movie.jpg";
function Projects() {
  const url = useLocation();
  const pathname = url.pathname;
  return (
  <m.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      exit={{ opacity: 0, x: -100 }}
    >
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
              width: "40%",
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
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={Movie}
                alt="movie"
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
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={Movie}
                alt="movie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Movie app
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Search and save your favourite movies and even find your
                  favourite actor
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Live Demo</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={Movie}
                alt="movie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Movie app
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Search and save your favourite movies and even find your
                  favourite actor
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Live Demo</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={Movie}
                alt="movie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Movie app
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Search and save your favourite movies and even find your
                  favourite actor
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Live Demo</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={Movie}
                alt="movie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Movie app
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Search and save your favourite movies and even find your
                  favourite actor
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Live Demo</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={Movie}
                alt="movie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Movie app
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Search and save your favourite movies and even find your
                  favourite actor
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Live Demo</Button>
                <Button size="small">Learn More</Button>
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
    </m.div>
  );
}

export default Projects;