// import React,{useEffect} from 'react'
import { BarChart, LineChart, PieChart } from "@mui/x-charts";

export const Analytics = () => {
  return (
    <div style={{ marginTop: "60px" }}>
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
      <BarChart
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
  );
};
