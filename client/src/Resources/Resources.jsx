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
} from "@mui/material";
import axios from "axios";
const API_URL = "http://localhost:5000";

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
            fontSize: 24,
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
            fontSize: 26,
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          {options.map((option, i) => {
            return (
              <MenuItem key={option + i} value={option}>
                <Typography
                  style={{ fontSize: 24, fontWeight: "bold", color: "#1E7C83" }}
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
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "500px",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        border: "1px solid #1E7C83",
        borderRadius: 2,
        background: "transparent",
      }}
    >
      <CardContent>
        <Typography variant="h4" fontWeight="bold">
          {name}
        </Typography>
        <Typography style={{ color: "#1E7C83" }}>{authors}</Typography>
        <Typography sx={{ fontSize: 18, mt: 3, ml: 3, mr: 10 }}>
          {about}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Resources() {
  // Filter and Options
  const [filter, setFilter] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [degOptions, setDegOptions] = useState(["B.Tech", "M.Tech", "BBA"]);
  const [brOptions, setBrOptions] = useState([
    "Computer Science And Engineering",
    "Mechanical Engineering",
    "Course",
  ]);
  const [crOptions, setCrOptions] = useState([
    "Introduction to Programming",
    "Operating Systems",
  ]);

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
      const newResources = await axios.get(API_URL + "/resources", {
        params: {
          ...filter,
        },
      });
      setResources(newResources.data);
    })();
  }, [filter]);
  // Resources
  const [resources, setResources] = useState([]);

  // Component
  return (
    <Box ml={20} mr={20} mt={10} mb={10}>
      <Box>
        <Typography variant="h3" component="h1" fontWeight="bold">
          Repository
        </Typography>
        <Typography fontSize={28} mt={2} color="#1E7C83" maxWidth="550px">
          Find here all the latest books, research papers and curricular updates
        </Typography>
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
          name={"Branch"}
          value={filter["branch"] ? filter["branch"] : ""}
          options={brOptions}
          dropdownHandle={makeDropdownHandle("branch")}
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
        {resources ? (
          resources.map((resource, index) => (
            <ResourceCard resource={resource} key={resource.name + index} />
          ))
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}
