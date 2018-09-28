import React, {Fragment} from "react";
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";


const styles = theme => ({
    headings: {
        color: '#2b59a8',
        textTransform: 'uppercase',
        fontWeight: 100,
        //fontSize: 14
    },
    subHeadings: {
        textTransform: 'uppercase',
        color: '#cccccc',
        fontWeight: 100,
        marginBottom: '35px',
    }
});

function MainHeader(props) {
    const { classes } = props;
    return (
        <Fragment>
            <Typography className={classes.headings} variant="display2" gutterBottom align="center">customer management</Typography>
            <Typography className={classes.subHeadings} variant="title" gutterBottom align="center">user</Typography>
        </Fragment>
    )
}

MainHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainHeader);
