import { Box, Button, Typography } from "@mui/material";
import { useAppcontext } from "../Context/context/appContext";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function ApprovalRow({ user }) {
  const buttonStyle = {
    fontSize: 18,
  };
  const handleApprove = (e) => {};
  const handleReject = (e) => {};
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: 2,
        boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
        borderRadius: 2,
      }}
    >
      <Typography fontSize={22}>{user.name} </Typography>
      <Box>
        <Button variant="contained" style={buttonStyle} onClick={handleApprove}>
          Approve
        </Button>
        <Button
          variant="outlined"
          sx={{ ml: 4 }}
          style={buttonStyle}
          onClick={handleReject}
        >
          Reject
        </Button>
      </Box>
    </Box>
  );
}
export default function Admin() {
  const { user } = useAppcontext();
  const [approval, setApproval] = useState([
    {
      name: "Amit Verma",
    },
    {
      name: "Rohit Sharma",
    },
    {
      name: "Jivanshu Popli",
    },
  ]);
  if (user.role !== "Administrator") return <Navigate to="/" replace />;
  return (
    <Box ml={20} mr={20} mt={10} mb={10}>
      <Typography variant="h4" component="h1" fontWeight="bold">
        Pending Approvals
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }} mt={5}>
        <Box width={"100%"} pb={2}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            ml={5}
            mb={3}
          >
            Name
          </Typography>
          <Box
            height={2}
            width={"100%"}
            backgroundColor={"#1E7C83"}
            borderRadius={100}
          />
        </Box>
        {approval.map((user, index) => (
          <ApprovalRow user={user} key={user.name + index} />
        ))}
      </Box>
    </Box>
  );
}
