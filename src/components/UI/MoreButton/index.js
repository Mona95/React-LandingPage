import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import './index.scss'

const MoreButton = ({btnCls}) => {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
             <Button
              className={`${btnCls} more-btn`}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ padding: 5, width: 15 }}
              >
                <FontAwesomeIcon icon={faBars} size="lg" />
              </Button>
              <Menu
              className="more-btn-menu"
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
        </div>
    )
}

export default MoreButton
