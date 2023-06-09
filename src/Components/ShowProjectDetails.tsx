import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "500px",
  bgcolor: "background.paper",
  p: 2,
  boxShadow: 24,

  color: "#000",
  borderRadius: "5px",
};
type Props = {
  title: string;
  info: string;
};
const ShowProjectDetails = ({ title, info }: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(title, info);

  return (
    <div>
      <Button
        onClick={handleOpen}
        size="small"
        sx={{
          marginLeft: "0.5rem",
        }}
      >
        Learn More
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {info}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ShowProjectDetails;
