import React from "react";
import SideNav from "../SideNav";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex"}}>
        <SideNav />
        <h1>Home</h1>
      </Box>
    </>
  );
};

export default Home;
