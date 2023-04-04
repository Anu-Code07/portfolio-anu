import { useRoutes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

function NavRoutes() {
  let routes = useRoutes([
    {
      path: "/",

      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/skills",
      element: <Skills />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
  ]);
  return routes;
}

export default NavRoutes;
