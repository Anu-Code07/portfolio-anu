import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Divider,
  TextareaAutosize,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { serviceId, templateId, userID } from "../datastore";
import { useNotify } from "../utils/useNotify";
import emailjs from "emailjs-com";
import { useState } from "react";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "350px",
  bgcolor: "background.paper",
  p: 4,
  boxShadow: 24,

  color: "#000",
  borderRadius: "5px",
};

const EmailMessage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [message, setMessage] = useState({
    from_name: "",
    message: "",
  });
  const notify = useNotify();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sendEmail = () => {
      emailjs.send(serviceId, templateId, message, userID).then(
        (result) => {
          notify.sucess("Email sent!");
          handleClose();
          setMessage({
            from_name: "",
            message: "",
          });
        },
        (error) => {
          notify.error("Error Sending Email OOPs!");
          console.log(error.text);
        }
      );
    };
    if (message.message.length !== 0 && message.from_name.length !== 0) {
      sendEmail();
    } else {
      notify.error("Please fill all the fields, before sending!");
    }
  };
  return (
    <div>
      <Button
        variant="outlined"
        sx={{
          mt: 4,
        }}
        endIcon={<ArrowForwardIcon sx={{}} />}
        onClick={handleOpen}
      >
        {" "}
        Connect with me
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            variant="h5"
            component="h2"
            style={{
              //   color: "#61BFFB",
              fontWeight: "bold",
            }}
          >
            Yippee! your message please
          </Typography>
          <Divider
            sx={{
              mt: 2,
              mb: 4,
              background: "#1976d2",
            }}
          />
          <form onSubmit={(e) => handleSubmit(e)}>
            <Box mb={2}>
              <TextField
                label="Please Enter your Name"
                fullWidth
                onChange={(e) => {
                  setMessage({ ...message, from_name: e.target.value });
                }}
              />
            </Box>
            <Box mb={2}>
              <TextareaAutosize
                minRows={4}
                placeholder="Your Message Please"
                className="text-aream-sendemail"
                onChange={(e) => {
                  setMessage({ ...message, message: e.target.value });
                }}
              ></TextareaAutosize>
            </Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                type="submit"
                sx={{
                  mr: 2,
                }}
              >
                Send
              </Button>
              <Button variant="outlined" color="error" onClick={handleClose}>
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EmailMessage;
