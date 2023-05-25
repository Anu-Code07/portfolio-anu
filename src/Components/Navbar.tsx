import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import "../styles/navbar.scss";
import { useEffect, useState } from "react";
import Logo from "../assets/img/logo.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useNotify } from "../utils/useNotify";

const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [scrolls, setScrolled] = useState<boolean>();
  const [mobilemenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const notify = useNotify();
  const url = useLocation();
  const pathname = url.pathname;
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 500) {
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
  const showMobileMenu = () => {
    //  window.addEventListener('click',()=>{
    //   let navs=document.querySelector('.nav-text')
    //   navs?.classList.toggle('.toggle-menu')
    //    })
    setMobileMenu(!mobilemenu);
  };

  function downloadResume() {
    const link = document.createElement("a");
    link.download = `Resume.pdf`;
    link.href =
      "https://drive.google.com/file/d/1gKRzxSvN1Iv5u5V4RYl_bSztbAhlnrRm/view?usp=sharing";
    link.target = "_blank";
    link.click();
  }
  const gotoSocial = (social: string) => {
    const link = document.createElement("a");
    if (social === "git") {
      link.href = "https://github.com/Anu-Code07";
    } else {
      link.href = "https://www.linkedin.com/in/anurag-kumar-singh-14473718a/";
    }
    link.target = "_blank";
    link.click();
  };
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
          <Typography
            style={{
              fontSize: "2.2rem",
              fontWeight: "bold",
              letterSpacing: "10px",
            }}
          >
            ANURAG
          </Typography>
        </Box>

        <Box className={`${mobilemenu ? `toggle-menu` : `nav-texts`}`}>
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
          <Button variant="outlined" onClick={downloadResume}>
            Download Resume
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          ></Box>
        </Box>
        <Box
          className={`${mobilemenu ? `active-mobile` : `hamburger-menu`}`}
          onClick={showMobileMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          right: 10,
          top: "40%",
          display: "flex",
          zIndex: "10",
          flexDirection: "column",

          justifyContent: "space-between",
        }}
        className="social-bg"
      >
        <div className="social-img">
          <IconButton onClick={() => gotoSocial("git")}>
            <GitHubIcon
              sx={{
                color: "#fff",
                fontSize: "35px",
                mt: 2,
              }}
            />
          </IconButton>
        </div>

        <div className="social-img">
          <IconButton onClick={() => gotoSocial("linkedin")}>
            <LinkedInIcon
              sx={{
                color: "#fff",
                fontSize: "35px",
                mt: 2,
              }}
            />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default NavBar;
