import React from "react";
import SideNav from "../SideNav";
import Stack from "@mui/material/Stack";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Margin } from "@mui/icons-material";


const Applications = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <SideNav />
      <div>
        <Stack direction="row" spacing={ {xs: 5, sm: 10, md: 25}} justifyContent="space-around" alignItems="center" >
          <Item> Application Name</Item>
          <Item>Status</Item>
          <Item>Company Name</Item>
        </Stack>
      </div>
    </>
  );
};

export default Applications;
