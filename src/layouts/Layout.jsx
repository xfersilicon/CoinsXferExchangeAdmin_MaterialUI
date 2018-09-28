import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Header from "../components/Header/Header";
import SideBar from "../components/Sidebar/SideBar";

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    appBarSpacer: theme.mixins.toolbar,
});

class Layout extends React.Component {
    state = {
        listItem1Opened: false,
        listItem2Opened: false,
        listItem3Opened: false,
        listItem4Opened: false,
        listItem5Opened: false,
        mobileOpen: false
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    // handleListItemToggle = (e, lItem) => {
    //     console.log(lItem);
    //     this.setState(state => ({ listItemOpen: !state.listItemOpen }));
    // };

    handleListItemToggle = (e, lItem) => {
        console.log('====================================');
        console.log(lItem);
        console.log('====================================');
        if(lItem === 'lItem1') {
            this.setState(state => ({ listItem1Opened: !state.listItem1Opened}));
        } else if(lItem === 'lItem2') {
            this.setState(state => ({ listItem2Opened: !state.listItem2Opened}));
        } else if(lItem === 'lItem3') {
            this.setState(state => ({ listItem3Opened: !state.listItem3Opened}));
        } else if(lItem === 'lItem4') {
            this.setState(state => ({ listItem4Opened: !state.listItem4Opened}));
        } else if(lItem === 'lItem5') {
            this.setState(state => ({ listItem5Opened: !state.listItem5Opened}));
        }
    };


    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                {/*<CssBaseline />*/}
                <div className={classes.root}>
                    <Header handleDrawerToggle={this.handleDrawerToggle}/>
                    <SideBar handleDrawerToggle={this.handleDrawerToggle} handleListItemToggle={this.handleListItemToggle} state={this.state}/>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                            {this.props.children}
                    </main>
                </div>
            </Fragment>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Layout);