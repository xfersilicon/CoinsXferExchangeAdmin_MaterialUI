import React, {Fragment} from "react";
import TotalRegisteredUsersTable from "../Tables/DashboardTables/TotalRegisteredUsersTable";
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core/styles";
import TotalUsers from "./TotalUsers";
import SellOrders from "./SellOrders";
import BuyOrders from "./BuyOrders";
import Grid from "@material-ui/core/Grid/Grid";
import MainHeader from "../MainHeader/MainHeader";


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        flexGrow: 1,
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    // heading: {
    //     color: '#2b59a8',
    //     fontWeight: 300,
    //     fontSize: 40,
    // },

});

const Dashboard = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <MainHeader/>
            <Grid container spacing={24}>
                <Grid item xs={4}>
                    <TotalUsers/>
                </Grid>
                <Grid item xs={4}>
                    <SellOrders/>
                </Grid>
                <Grid item xs={4}>
                    <BuyOrders/>
                </Grid>
            </Grid>
            <TotalRegisteredUsersTable/>
        </div>
    );
};

export default withStyles(styles)(Dashboard);
