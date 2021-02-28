import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";

import "./index.scss";
import MoreButton from "../MoreButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [isTablet, setIsTablet] = useState(false);
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsTablet(window.outerWidth <= 980);
    });
  });

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

          {isTablet && <MoreButton btnCls="isMobile" />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
