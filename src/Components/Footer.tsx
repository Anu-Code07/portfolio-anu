import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import "../styles/footer.scss";
function Footer() {
  return (
    <div className="jfoot">
      <Box className="footer">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
          }}
        >
          Developed By @ Anurag
        </Typography>
      </Box>
    </div>
  );
}

export default Footer;
