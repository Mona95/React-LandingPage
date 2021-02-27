import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FeatureCard from "../FeatureCard";
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
    margin: 0,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    boxShadow: "none",
    borderRadius: 22,
    border: 'none',
    "&:hover": {
      transition: "300ms",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    },
    "@media screen and (max-width: 478px)":{
      border: '1px solid #EBF2FA',
      textAlign:'center'
    }
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
        <Grid container spacing={5} className={classes.row}>
          <Grid item xs={12} md={4} lg={4}>
            <Paper className={classes.paper}>
              <FeatureCard
                icon={{icon: <IntegrationIcon />, bgColor:'#EFECF9'}}
                title="Seamless Integration"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor quisque nisl, sed ut. Sollicitudin at tincidunt
                interdum sit ultricies maecenas. Fringilla.
              </FeatureCard>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper
              style={{ boxShadow: "0px 70px 106px rgba(60, 52, 81, 0.12)", border: 'none' }}
              className={classes.paper}
            >
              <FeatureCard
                icon={{icon: <MethodsIcon />, bgColor: '#FFEDED'}}
                title="Advanced Software Methods"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor quisque nisl, sed ut. Sollicitudin at tincidunt
                interdum sit ultricies maecenas.
              </FeatureCard>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper className={classes.paper}>
              <FeatureCard icon={{icon : <SupportIcon />, bgColor: '#FFF7EE'}} title="Amazing Support">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Porttitor quisque nisl, sed ut. Sollicitudin at tincidunt
                interdum.
              </FeatureCard>
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
