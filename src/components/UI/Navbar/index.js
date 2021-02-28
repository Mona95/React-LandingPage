import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Logo } from "../../../assets/images";
import { useMediaQuery } from "react-responsive";
import { v4 as uuidv4 } from "uuid";

import "./index.scss";
import MoreButton from "../MoreButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const isTabletOrMobile = useMediaQuery({ maxWidth: 980 });

  const navMenuItems = [
    "Who we help",
    "Features",
    "Integrations",
    "Pricing",
    "Developers",
    "Contact",
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" className="appbar-wrapper">
        <Toolbar>
          <div className="logo-wrapper">
            <Logo />
          </div>
          {!isTabletOrMobile && (
            <>
              {navMenuItems.map((item) => (
                <Button key={uuidv4()}>{item}</Button>
              ))}
            </>
          )}

          <Button className="isMobile selected">Try now</Button>

          {isTabletOrMobile && (
            <MoreButton menuItems={navMenuItems} btnCls="isMobile" />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
