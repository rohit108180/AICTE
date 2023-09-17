import { useState } from "react";
import {
  Select,
  FormControl,
  Box,
  InputLabel,
  MenuItem,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
function Dropdown({ name, value, dropdownHandle, options }) {
  return (
    <Box sx={{ minWidth: 250}}>
      <FormControl fullWidth>
        <InputLabel id={name + "-st1"}>{name}</InputLabel>
        <Select
          id={name + "-st"}
          labelId={name + "-st1"}
          value={value}
          onChange={dropdownHandle}
          label={name}
        >
          {options.map((option, i) => {
            return (
              <MenuItem key={option + i} value={option}>
                <Typography sx={{ fontSize: 18 }}>{option}</Typography>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
function ResourceCard({ name, content }) {
  return (
    <Card variant="outlined" sx={{ maxWidth: "400px", padding: 5 }}>
      <CardContent>
        <Typography variant="h4" component="h3">
          {name}
        </Typography>
        <Typography sx={{ fontSize: 18 }}>{content}</Typography>
      </CardContent>
    </Card>
  );
}
export default function Resources() {
  // Filter and Options
  const [degOptions, setDegOptions] = useState(["B.Tech", "M.Tech", "BBA"]);
  const [degFilter, setDegFilter] = useState("");
  const [brOptions, setBrOptions] = useState([
    "Computer Science And Engineering",
    "Mechanical Engineering",
    "Course",
  ]);
  const [brFilter, setBrFilter] = useState("");
  const [crOptions, setCrOptions] = useState([
    "Introduction to Programming",
    "Operating Systems",
  ]);
  const [crFilter, setCrFilter] = useState("");
  const makeDropdownHandle = (value, setValue) => {
    return (event) => {
      setValue(event.target.value);
    };
  };

  // Resources
  const [resources, setResources] = useState([
    {
      name: "Software Engineering",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis quis consequuntur nemo magnam maiores harum praesentium repellendus deserunt animi.",
    },
    {
      name: "Software Engineering",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis quis consequuntur nemo magnam maiores harum praesentium repellendus deserunt animi.",
    },
    {
      name: "Software Engineering",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis quis consequuntur nemo magnam maiores harum praesentium repellendus deserunt animi.",
    },
  ]);

  // Component
  return (
    <Box className="rs-contain" ml={20} mr={20} mt={10}>
      <Box className="rs-top">
        <Typography variant="h4" component="h4" fontWeight="bold">
          Repository
        </Typography>
        <Typography variant="h6" component="text">
          Find here all the latest books, research papers and curricular updates
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          maxWidth: "1200px",
          gap: 20,
          margin: "0 auto",
          marginTop: 10,
        }}
      >
        <Dropdown
          name={"Degree"}
          value={degFilter}
          options={degOptions}
          dropdownHandle={makeDropdownHandle(degFilter, setDegFilter)}
        />
        <Dropdown
          name={"Branch"}
          value={brFilter}
          options={brOptions}
          dropdownHandle={makeDropdownHandle(brFilter, setBrFilter)}
        />
        <Dropdown
          name={"Course"}
          value={crFilter}
          options={crOptions}
          dropdownHandle={makeDropdownHandle(crFilter, setCrFilter)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          marginTop: 10,
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        {resources.map((resource, index) => (
          <ResourceCard
            name={resource.name}
            content={resource.content}
            key={resource.name + index}
          />
        ))}
      </Box>
    </Box>
  );
}
