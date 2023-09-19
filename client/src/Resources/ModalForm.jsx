import {
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxWidth: "90vw",
  background: "#F3F3F3",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
const API_URL = "http://localhost:5000";

export default function ModalForm({ open, handleClose }) {
  const [name, setName] = useState("");
  const [authors, setAuthors] = useState("");
  const [department, setDepartment] = useState("");
  const [degree, setDegree] = useState("");
  const [course, setCourse] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [about, setAbout] = useState("");

  const stateReset = () => {
    setName("");
    setAuthors("");
    setDepartment("");
    setDegree("");
    setCourse("");
    setDriveLink("");
    setAbout("");
  }
  const submitData = async () => {
    const newResource = {
        Name: name,
        Authors: authors,
        Department: department,
        Degree: degree,
        Course: course,
        DriveLink: driveLink,
        About: about
    }
    // send request
    await axios.post(API_URL + "/resources", newResource);
    stateReset();
    // to close the form
    handleClose();
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 4 }}
          color="primary"
          fontWeight="bold"
        >
          New Resource
        </Typography>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "80%",
            margin: "0 auto",
          }}
          onSubmit={async (e) => {
            e.preventDefault();
            await submitData();
          }}
        >
          <FormControl>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            ></TextField>
          </FormControl>
          <FormControl>
            <TextField
              label="Authors"
              value={authors}
              onChange={(e) => setAuthors(e.target.value)}
              required
              fullWidth
            ></TextField>
          </FormControl>
          <FormControl>
            <TextField
              label="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
              fullWidth
            ></TextField>
          </FormControl>
          <FormControl>
            <TextField
              label="Degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              required
              fullWidth
            ></TextField>
          </FormControl>
          <FormControl>
            <TextField
              label="Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              fullWidth
            ></TextField>
          </FormControl>
          <FormControl>
            <TextField
              label="Drive Link"
              value={driveLink}
              onChange={(e) => setDriveLink(e.target.value)}
              required
              fullWidth
            ></TextField>
          </FormControl>
          <FormControl>
            <TextField
              label="About"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              multiline
              fullWidth
            ></TextField>
          </FormControl>
          <Button variant="contained" type="submit" style={{fontWeight: "bold"}}>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
