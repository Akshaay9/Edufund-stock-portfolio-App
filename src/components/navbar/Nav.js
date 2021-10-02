import React from "react";
import "./nav.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <AppBar position="static" color="primary" className="nav-bar">
        <Toolbar>
          <NavLink to="/"></NavLink>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            <NavLink to="/"> fund.tech</NavLink>
          </Typography>

          <div>
            <IconButton
              size="xl"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <NavLink to="/profile">
                <Button color="">
                  <AccountCircle />
                </Button>
              </NavLink>
            </IconButton>
            <IconButton
              size="xl"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Button color="">
                <LogoutIcon />
              </Button>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
