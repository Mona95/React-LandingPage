import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';

import './index.scss';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

const Navbar = () => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
       <AppBar position="static" className='appbar-wrapper'>
        <Toolbar>
          <div className="logo-wrapper">
            <Logo />
          </div>
          <Button>Who we help</Button>
          <Button>Features</Button>
          <Button>Integrations</Button>
          <Button>Pricing</Button>
          <Button>Developers</Button>
          <Button>Contact</Button>
          <Button className="isMobile selected">Try now</Button>
        </Toolbar>
      </AppBar> 
        </div>
    )
}

export default Navbar
