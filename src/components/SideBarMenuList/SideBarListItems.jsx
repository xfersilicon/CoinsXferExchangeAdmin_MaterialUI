import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {withStyles} from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = theme => ({
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

function MainListItems(props) {
    const {classes} = props;
    const {listItem1Opened, listItem2Opened, listItem3Opened , listItem4Opened, listItem5Opened} = props.lItemState;
    return (
        <List>
            <ListItem button component={Link} to='/dashboard'>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>

            <ListItem button onClick={(e) => props.handleListItemToggle(e,'lItem1')}>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText inset primary="Customers Info"/>
                {listItem1Opened ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={listItem1Opened} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested} component={Link} to='/kycDetails'>
                        <ListItemText inset primary="KYC Details" />
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to='/info' >
                        <ListItemText inset primary="Info" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button component={Link} to='/kycApprovals'>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="KYC Approvals"/>
            </ListItem>
            <ListItem button component={Link} to='/accountActivationPanel'>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Account Activation Panel"/>
            </ListItem>
            <ListItem button component={Link} to='/transactions'>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="Transactions"/>
            </ListItem>
            <ListItem button component={Link} to='/advancedSearch'>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="Advanced Search"/>
            </ListItem>
            <ListItem button onClick={(e) => props.handleListItemToggle(e,'lItem2')}>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText inset primary="Super Admin"/>
                {listItem2Opened ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={listItem2Opened} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested} component={Link} to='/createUser' >
                        <ListItemText inset primary="Create a User"/>
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to='/setUserRights' >
                        <ListItemText inset primary="Set user rights"/>
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to='/pageControl' >
                        <ListItemText inset primary="Page Control"/>
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={(e) => props.handleListItemToggle(e,'lItem3')}>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText inset primary="Commissions Settings"/>
                {listItem3Opened ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={listItem3Opened} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested} component={Link} to='/buyCommissionSettings' >
                        <ListItemText inset primary="BUY"/>
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to='/sellCommissionSettings' >
                        <ListItemText inset primary="SELL"/>
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={(e) => props.handleListItemToggle(e,'lItem4')}>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText inset primary="Balance Report"/>
                {listItem4Opened ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={listItem4Opened} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested} component={Link} to='/dailyReport' >
                        <ListItemText inset primary="Daily"/>
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to='/searchReport' >
                        <ListItemText inset primary="Search"/>
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={(e) => props.handleListItemToggle(e,'lItem5')}>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText inset primary="Transfers"/>
                {listItem5Opened ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={listItem5Opened} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested} component={Link} to='/withdrawalTransfers' >
                        <ListItemText inset primary="Withdrawals"/>
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to='/depositTransfers' >
                        <ListItemText inset primary="Deposits"/>
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to='/balanceReportTransfers' >
                        <ListItemText inset primary="Balance Reports"/>
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button component={Link} to='/openOrdersToken'>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="Open Orders/Token"/>
            </ListItem>
            <ListItem button component={Link} to='/tradeHistoryToken'>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="Trade History/Token"/>
            </ListItem>
            <ListItem button component={Link} to='/fiatWallet'>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="Fiat Wallet"/>
            </ListItem>
            <ListItem button component={Link} to='/accountStatus'>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="Account Status"/>
            </ListItem>
        </List>
    )
}

export default withStyles(styles)(MainListItems);
