// import React,{useEffect} from 'react'
import { Typography } from "@mui/material";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";

import analytics from '../assests/analytics.svg'
import { useContext } from "react";
import { useAppcontext } from "../Context/context/appContext";

export const Analytics = () => {

  const {user} = useAppcontext();
  return (
    <div style={{ marginTop: "60px" }}>
      
      <div className="topPartRepo">
          <div className="userInfo">
            <h1>Hey {user.name.split(" ")[0]},</h1>
            <Typography variant="h4" color="primary">
              Here's Some insights for you
            </Typography>
          </div>

          {/* <Button variant="outlined">
            <span className="addnewRepo" onClick={togglePopup}>
              + New Curriculum
            </span>
          </Button> */}

          <div width="200px" height="200px">
            <img src={analytics} style={{width:"300px" }}/>
          </div>
        </div>

        <div className="section" style={{display:"flex", flexDirection:"row", justifyContent:"space-around", flexWrap:"wrap"}}>

        <div style={{margin:"2rem"}}>
          <Typography variant="h3" color="primary">
          Students enrolled vs Schemes
            </Typography>
      <BarChart
        xAxis={[
          {
            id: "PeopleVSScheme",
            data: ["SIH", "NDF", "NDL"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        width={500}
        height={300}
      />

</div>

<div style={{margin:"2rem"}}>
          <Typography variant="h3" color="primary">
            State wise schemes
            </Typography>
      <BarChart
        xAxis={[
          {
            id: "PeopleVSScheme",
            data: ["2019", "2020", "2021", "2022", "2023"],
            scaleType: "band",
          },
        ]}
        series={[
          { data: [3, 4, 1, 6, 5], stack: "A", label: "UP" },
          { data: [4, 3, 1, 5, 8], stack: "A", label: "Delhi" },
          { data: [4, 2, 5, 4, 1], stack: "B", label: "Punjab" },
          { data: [2, 8, 1, 3, 1], stack: "B", label: "J&K" },
          { data: [10, 6, 5, 8, 9], label: "Bihar" },
        ]}
        width={600}
        height={350}
      />

</div>

<div style={{margin:"2rem"}}>
          <Typography variant="h3" color="primary">
          Percent change in enrollment
            </Typography>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={500}
        height={300}
      />

</div>

<div style={{margin:"2rem"}}>
          <Typography variant="h3" color="primary">
          Proportion of students enrolled
            </Typography>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "NDL" },
              { id: 1, value: 15, label: "NDF" },
              { id: 2, value: 20, label: "ATAL" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
    </div>
    </div>
  );
};
