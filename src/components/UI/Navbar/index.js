import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { useMediaQuery } from 'react-responsive'

import "./index.scss";
import MoreButton from "../MoreButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const isTabletOrMobile = useMediaQuery({ maxWidth: 980 })

  return (
    <div className={classes.root}>
      <AppBar position="static" className="appbar-wrapper">
        <Toolbar>
          <div className="logo-wrapper">
            <Logo />
          </div>
          {!isTabletOrMobile && (
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

          {isTabletOrMobile && <MoreButton btnCls="isMobile" />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
