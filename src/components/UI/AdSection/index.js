import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AdSectionImg from '../AdSectionImg'
import AdSectionContent from '../AdSectionContent'
import './index.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100%'
    },
    paper: {
        backgroundColor:'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        height: '100%',
        '@media screen and (max-width:900px)': {
            alignItems: 'start'
        }
    },
    row: {
        height: '100%'
    }
}));

const AdSection = () => {
    const classes = useStyles();

    return (
        <div className="adsection-wrapper">
            <div className={classes.root}>
                <Grid container spacing={3} className={classes.row}>
                    <Grid item sm={6}>
                        <Paper className={classes.paper}><AdSectionContent /></Paper>
                    </Grid>
                    <Grid className="isMobile" item sm={6}>
                        <Paper className={classes.paper}><AdSectionImg /></Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default AdSection
