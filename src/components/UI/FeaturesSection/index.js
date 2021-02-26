import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as IntegrationIcon } from "../../../assets/images/fcard-1.svg";
import { ReactComponent as MethodsIcon } from "../../../assets/images/fcard-2.svg";
import { ReactComponent as SupportIcon } from "../../../assets/images/fcard-3.svg";

import "./index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  row: {
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    border: "none",
    boxShadow: 'none',
    borderRadius: 22,
    "&:hover": {
      transition: "300ms",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    },
  },
}));

function FeaturesSection() {
  const classes = useStyles();

  return (
    <div className="featuresection-wrapper">
      <div className="featuresection-title">Main Features</div>
      <div className="featuresection-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus etiam
        sit urna elit tellus. Pretium placerat pellentesque leo sed. Etiam enim
        quis urna et.
      </div>
      <div className="features-cols">
        <Grid container spacing={3} className={classes.row}>
          <Grid item xs={12} md={4} lg={4}>
            <Paper className={classes.paper}>
              <div className="feature-card">
                <div className="feature-card-icon">
                  <IntegrationIcon />
                </div>
                <div className="feature-card-title">Seamless Integration</div>
                <div className="feature-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Porttitor quisque nisl, sed ut. Sollicitudin at tincidunt
                  interdum sit ultricies maecenas. Fringilla.
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper
              style={{ boxShadow: "0px 70px 106px rgba(60, 52, 81, 0.12)" }}
              className={classes.paper}
            >
              <div className="feature-card">
                <div className="feature-card-icon">
                  <MethodsIcon />
                </div>
                <div className="feature-card-title">
                  Advanced Software Methods{" "}
                </div>
                <div className="feature-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Porttitor quisque nisl, sed ut. Sollicitudin at tincidunt
                  interdum sit ultricies maecenas.
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper className={classes.paper}>
              {" "}
              <div className="feature-card">
                <div className="feature-card-icon">
                  <SupportIcon />
                </div>
                <div className="feature-card-title">Amazing Support</div>
                <div className="feature-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Porttitor quisque nisl, sed ut. Sollicitudin at tincidunt
                  interdum.
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    <div className="featuresection-button">
        <button className="trynow-btn">Try Now</button>
    </div>
    </div> 
  );
}

export default FeaturesSection;
