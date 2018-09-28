import React, {Fragment} from "react";
// import Typography from "@material-ui/core/Typography/Typography";
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/es/styles/withStyles";
import ListItem from "@material-ui/core/ListItem/ListItem";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

const styles = theme => ({
    buyStyle: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function BuyOrders(props) {
    const { classes } = props;
    return (
        <Fragment>
            <ListItem>
                <InboxIcon />
                <ListItemText className={classes.buyStyle} primary="Buy Orders"/>
            </ListItem>
        </Fragment>
    )
}

BuyOrders.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BuyOrders);