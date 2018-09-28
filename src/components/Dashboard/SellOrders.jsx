import React, {Fragment} from "react";
import Paper from "@material-ui/core/Paper/Paper";
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Icon from "@material-ui/core/Icon/Icon";
import red from "@material-ui/core/es/colors/red";
import Avatar from "@material-ui/core/Avatar/Avatar";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

const styles = theme => ({
    sellStyle: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function SellOrders(props) {
    const { classes } = props;
    return (
        <Fragment>
            <ListItem>
                    <InboxIcon />
                <ListItemText className={classes.sellStyle} primary="Sell Orders"/>
            </ListItem>
        </Fragment>
    )
}

SellOrders.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SellOrders);
