import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography/Typography";
import InboxIcon from "@material-ui/icons/MoveToInbox";


const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontWeight: 500,
        fontSize: 16,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        borderColor: theme.palette.common.blue
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    // customTable: {
    //     border: 2,
    //     borderColor: theme.palette.border.darkblue,
    // }
});

let id = 0;
function createData(name, status, place, date, token, address, phone, member) {
    id += 1;
    return { id, name, status, place, date, token, address, phone, member };
}

const rows = [
    createData('Ramaswamy', 'Enabled', 'Thiruvarur', 20-12-2018, 200, '13, Anna Avenue', 1234598766, 'Personal'),
    createData('Ramesh', 'Enabled', 'Chennai', 10-2-2018, 500, '13, Kumar Avenue', 1234598766, 'Personal'),
    createData('Pradeep', 'Enabled', 'Mumbai', 20-9-2018, 200, '13, Anna Avenue', 1234598766, 'Personal'),
    createData('RamaswamyP', 'Enabled', 'Hyderabad', 10-8-2018, 200, '13, Anna Avenue', 1234598766, 'Personal'),
    createData('Cream', 'Enabled', 'Bangalore', 28-7-2018, 200, '13, Anna Avenue', 1234598766, 'Personal'),
    createData('Stop', 'Enabled', 'Hampi', 14-1-2018, 200, '13, Anna Avenue', 1234598766, 'Personal'),
    createData('Phani', 'Enabled', 'Thiruchi', 30-6-2018, 300, '13, Anna Avenue', 1234598766, 'Personal'),
];

function CustomerManagementUsersTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Typography variant="display1" gutterBottom>
                <InboxIcon/>
                Products
            </Typography>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>CustomerName</CustomTableCell>
                        <CustomTableCell numeric>Status</CustomTableCell>
                        <CustomTableCell numeric>Place</CustomTableCell>
                        <CustomTableCell numeric>Member Since</CustomTableCell>
                        <CustomTableCell numeric>Tokens Traded</CustomTableCell>
                        <CustomTableCell numeric>Address</CustomTableCell>
                        <CustomTableCell numeric>Mobile Number</CustomTableCell>
                        <CustomTableCell numeric>Member Type</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell component="th" scope="row">{row.name}</CustomTableCell>
                                <CustomTableCell numeric>{row.status}</CustomTableCell>
                                <CustomTableCell numeric>{row.place}</CustomTableCell>
                                <CustomTableCell numeric>{row.date}</CustomTableCell>
                                <CustomTableCell numeric>{row.token}</CustomTableCell>
                                <CustomTableCell numeric>{row.address}</CustomTableCell>
                                <CustomTableCell numeric>{row.phone}</CustomTableCell>
                                <CustomTableCell numeric>{row.member}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

CustomerManagementUsersTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomerManagementUsersTable);