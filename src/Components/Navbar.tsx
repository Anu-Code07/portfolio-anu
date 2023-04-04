import { Box, Button, Typography } from "@mui/material";
import "../styles/navbar.scss";
import { useEffect, useState } from "react";
import Logo from "../assets/img/logo.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [scrolls, setScrolled] = useState<boolean>();
  const navigate = useNavigate();
  const url = useLocation();
  const pathname = url.pathname;
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <Box className="nav-container">
      <Box className={scrolls ? "scrolled" : "nav-content"}>
        <Box
          className="logo"
          sx={{
            padding: "1.3rem",
          }}
        >
          {/* <img src={Logo} alt="logo" width="100px" height="100px" /> */}
          <Typography style={{
            fontSize:"2.2rem",
            fontWeight:"bold",
            letterSpacing:"10px"
          }}>ANURAG</Typography>
        </Box>

        <Box className="nav-texts" sx={{}}>
          <Typography
            sx={{
              fontSize: "1.5rem",
            }}
            className={activeLink === "/" ? "active-link" : ""}
          >
            <NavLink to={"/"}>Home</NavLink>
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
            }}
            className={activeLink === "/about" ? "active-link" : ""}
          >
            <NavLink to="/about">About</NavLink>
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
            }}
            className={activeLink === "/skills" ? "active-link" : ""}
          >
            <NavLink to="/skills">Skills</NavLink>
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
            }}
            className={activeLink === "/projects" ? "active-link" : ""}
          >
            <NavLink to="/projects">Projects</NavLink>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "fixed",
                right: 10,
                top: "50%",
                display: "flex",
                flexDirection: "column",

                justifyContent: "space-between",
              }}
              className="social-bg"
            >
              <div className="social-img">
                <GitHubIcon
                  sx={{
                    color: "#fff",
                    fontSize: "35px",
                    mt: 2,
                  }}
                />
              </div>
              <div className="social-img">
                <InstagramIcon
                  sx={{
                    color: "#fff",
                    fontSize: "35px",
                    mt: 2,
                  }}
                />
              </div>
              <div className="social-img">
                <LinkedInIcon
                  sx={{
                    color: "#fff",
                    fontSize: "35px",
                    mt: 2,
                  }}
                />
              </div>
            </Box>
            <Button variant="outlined">Download Resume</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
