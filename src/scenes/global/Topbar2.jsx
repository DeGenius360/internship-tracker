import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { InputBase } from "@mui/material";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2} witdth="100%">
      {/** SEARCH BAR AND ICONS */}
      <Box display="flex">
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          {/* Replace with dummy content */}
          <div style={{ width: "200px", height: "40px", background: "white" }}>
          Dummy Search
          </div>
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/** ICONS */}
        <Box display="flex">
          {/* Replace with dummy icons */}
          <div style={{ width: "24px", height: "24px", background: "red" }}></div>
          <div
            style={{ width: "24px", height: "24px", background: "blue" }}
          ></div>
          <div
            style={{ width: "24px", height: "24px", background: "green" }}
          ></div>
        </Box>
      </Box>
    </Box>
  );
};
export default Topbar2;
