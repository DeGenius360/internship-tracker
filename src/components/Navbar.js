import React from "react";
import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Container } from "@mui/material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null); // close the menu
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, marginLeft: -16 }}
              onClick={handleMenuClick} 
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" component="p">
              Internship Tracker
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Applications</MenuItem>
        {/* <MenuItem onClick={handleClose}>Dashboard</MenuItem> */}
      </Menu>
    </div>
  );
};

export default Navbar;
