import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import MainListItems from "../SideBarMenuList/SideBarListItems";

export const drawerWidth = 300;

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
            height: '100vh',
        },
    },
});


function SideBar(props) {
        const { classes, theme, state } = props;
        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <MainListItems lItemState={state} handleListItemToggle={props.handleListItemToggle}/>
            </div>
        );

        return (
            <Fragment>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={state.mobileOpen}
                        onClose={props.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </Fragment>
        );

}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

// export default withStyles(styles)(SideBar);
export default withStyles(styles, { withTheme: true })(SideBar);