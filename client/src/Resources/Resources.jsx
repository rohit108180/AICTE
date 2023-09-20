import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Select,
  FormControl,
  Box,
  MenuItem,
  Typography,
  Card,
  CardContent,
  InputLabel,
  CircularProgress,
  Button,
} from "@mui/material";
import axios from "axios";
import ModalForm from "./ModalForm";
import options from "./FilterOptions";
import { useAppcontext } from "../Context/context/appContext";
const API_URL = "https://aicte-portal-backend.onrender.com";

function Dropdown({ name, value, dropdownHandle, options }) {
  return (
    <Box>
      <FormControl
        fullWidth
        sx={{
          minWidth: 300,
          backgroundColor: "#DFECED",
          textAlign: "center",
        }}
      >
        <InputLabel
          id={name + "-st1"}
          style={{
            color: "#1E7C83",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {name}
        </InputLabel>
        <Select
          id={name + "-st"}
          value={value}
          label={name}
          labelId={name + "-st1"}
          onChange={dropdownHandle}
          sx={{
            fontSize: 20,
            textAlign: "center",
            borderRadius: 2,
          }}
          MenuProps={{
            PaperProps: {
              sx: { maxHeight: "400px" },
            },
          }}
        >
          {options.map((option, i) => {
            return (
              <MenuItem key={option + i} value={option}>
                <Typography
                  style={{ fontSize: 20, fontWeight: "bold", color: "#1E7C83" }}
                >
                  {option}
                </Typography>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

function ResourceCard({ resource }) {
  const name = resource.Name;
  const about = resource.About;
  const authors = resource.Authors;
  const department = resource.Department;
  const degree = resource.Degree;
  

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "500px",
        paddingTop: 2,
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        border: "1px solid #1E7C83",
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography style={{ color: "#1E7C83" }} fontWeight="bold">
          {department} | {degree}
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          {name}
        </Typography>
        <Typography style={{ color: "#1E7C83" }}>By: {authors}</Typography>
        <Typography style={{ fontSize: 18 }} sx={{ mt: 3, ml: 3, mr: 10 }}>
          {about}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Resources() {
  // States
  const [filter, setFilter] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [degOptions, setDegOptions] = useState(options.degreeOptions);
  const [deptOptions, setDeptOptions] = useState(options.departmentOptions);
  const [crOptions, setCrOptions] = useState(options.courseOptions);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAppcontext();
  // Utility
  const makeDropdownHandle = (name) => {
    return (event) => {
      // add required search param
      const newSearchParams = { ...filter };
      newSearchParams[name] = event.target.value;

      // set
      setSearchParams(newSearchParams);
    };
  };

  // Initial Stuff
  useEffect(() => {
    const newFilterObj = {};
    searchParams.forEach((value, key) => (newFilterObj[key] = value));
    setFilter(newFilterObj);
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const newResources = await axios.get(API_URL + "/resources", {
        params: {
          ...filter,
        },
      });
      setResources(newResources.data);
      setLoading(false);
    })();
  }, [filter]);

  // Modal
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => setOpen(true);
  const handleClose = (e) => setOpen(false);

  // Component
  return (
    <Box ml={20} mr={20} mt={10} mb={10}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h3" component="h1" fontWeight="bold">
            Repository
          </Typography>
          <Typography fontSize={28} mt={2} color="#1E7C83" maxWidth="550px">
            Find here all the latest books, research papers and curricular
            updates
          </Typography>
        </Box>
        <Box>
          {user &&
          <Button
            onClick={handleOpen}
            variant="outlined"
            sx={{ mt: 3, fontWeight: "bold", fontSize: 20}}
          >
            + Add New
          </Button>
          }
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: "0 auto",
          marginTop: 10,
          gap: 5,
          flexWrap: "wrap",
          alignContent: "flex-start",
        }}
      >
        <Dropdown
          name={"Degree"}
          value={filter["degree"] ? filter["degree"] : ""}
          options={degOptions}
          dropdownHandle={makeDropdownHandle("degree")}
        />
        <Dropdown
          name={"Department"}
          value={filter["department"] ? filter["department"] : ""}
          options={deptOptions}
          dropdownHandle={makeDropdownHandle("department")}
        />
        <Dropdown
          name={"Course"}
          value={filter["course"] ? filter["course"] : ""}
          options={crOptions}
          dropdownHandle={makeDropdownHandle("course")}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: "0 auto",
          marginTop: 10,
          gap: 5,
          flexWrap: "wrap",
          alignContent: "flex-start",
        }}
      >
        {loading ? (
          <CircularProgress sx={{ mt: 10 }} size={80} />
        ) : resources.length > 0 ? (
          resources.map((resource, index) => (
            <ResourceCard resource={resource} key={resource.name + index} />
          ))
        ) : (
          <Box>
            <Typography style={{ color: "gray", fontSize: 24 }} mt={10}>
              No Match Found
            </Typography>
          </Box>
        )}
      </Box>
      <ModalForm open={open} handleClose={handleClose} />
    </Box>
  );
}
