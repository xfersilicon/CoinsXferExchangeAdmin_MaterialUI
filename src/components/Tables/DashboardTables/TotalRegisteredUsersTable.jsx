import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from "@material-ui/core/TableHead";

const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    };

    render() {
        const { classes, count, page, rowsPerPage, theme } = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </div>
        );
    }
}

TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
    TablePaginationActions,
);

let counter = 0;
function createData(name, calories, fat, test, expo, testing, testtest, thyghfy, nbyhjh) {
    counter += 1;
    return { id: counter, name, calories, fat, test, expo, testing, testtest, thyghfy, nbyhjh };
}

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class TotalRegisteredUsersTable extends React.Component {
    state = {
        rows: [
            createData('Ramaswamy', 'Enabled', 'Thiruvarur', '20-12-2018', 200, '13, Anna Avenue', 1234598766, 'Personal', 56),
            createData('Ramesh', 'Enabled', 'Chennai', '10-2-2018', 500, '13, Kumar Avenue', 1234598766, 'Personal', 76),
            createData('Pradeep', 'Enabled', 'Mumbai', '20-9-2018', 200, '13, Anna Avenue', 1234598766, 'Personal', 7),
            createData('RamaswamyP', 'Enabled', 'Hyderabad', '10-8-2018', 200, '13, Anna Avenue', 1234598766, 'Personal', 8778),
            createData('Cream', 'Enabled', 'Bangalore', '28-7-2018', 200, '13, Anna Avenue', 1234598766, 'Personal', 8765),
            createData('Stop', 'Enabled', 'Hampi', '14-1-2018', 200, '13, Anna Avenue', 1234598766, 'Personal', 8765),
            createData('Phani', 'Enabled', 'Thiruchi', '30-6-2018', 300, '13, Anna Avenue', 1234598766, 'Personal', 32456),
        ].sort((a, b) => (a.expo > b.expo ? -1 : 1)),
        page: 0,
        rowsPerPage: 5,
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const { rows, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

        return (
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>CustomerName</TableCell>
                                <TableCell numeric>Status</TableCell>
                                <TableCell numeric>Place</TableCell>
                                <TableCell numeric>Member Since</TableCell>
                                <TableCell numeric>Tokens Traded</TableCell>
                                <TableCell numeric>Address</TableCell>
                                <TableCell numeric>Mobile Number</TableCell>
                                <TableCell numeric>Member Type</TableCell>
                                <TableCell numeric>Member</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell numeric>{row.calories}</TableCell>
                                        <TableCell numeric>{row.fat}</TableCell>
                                        <TableCell numeric>{row.test}</TableCell>
                                        <TableCell numeric>{row.expo}</TableCell>
                                        <TableCell numeric>{row.testing}</TableCell>
                                        <TableCell numeric>{row.testtest}</TableCell>
                                        <TableCell numeric>{row.thyghfy}</TableCell>
                                        <TableCell numeric>{row.nbyhjh}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 48 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    colSpan={9}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActionsWrapped}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </Paper>
        );
    }
}

TotalRegisteredUsersTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TotalRegisteredUsersTable);
