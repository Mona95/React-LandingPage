import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsTablet(window.outerWidth <= 980);
    });
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className="appbar-wrapper">
        <Toolbar>
          <div className="logo-wrapper">
            <Logo />
          </div>
          {!isTablet && (
            <>
              <Button>Who we help</Button>
              <Button>Features</Button>
              <Button>Integrations</Button>
              <Button>Pricing</Button>
              <Button>Developers</Button>
              <Button>Contact</Button>
            </>
          )}

          <Button className="isMobile selected">Try now</Button>

          {isTablet && (
            <>
              <Button
              className="isMobile"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ padding: 14, width: 40 }}
              >
                <FontAwesomeIcon icon={faBars} size="lg" />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <MenuItem onClick={handleClose}>Who we help</MenuItem>
                <MenuItem onClick={handleClose}>Features</MenuItem>
                <MenuItem onClick={handleClose}>Integrations</MenuItem>
                <MenuItem onClick={handleClose}>Pricing</MenuItem>
                <MenuItem onClick={handleClose}>Developers</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
