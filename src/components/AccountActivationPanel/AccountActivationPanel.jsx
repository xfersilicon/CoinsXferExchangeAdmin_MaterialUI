import React, {Fragment} from "react";
import TotalRegisteredUsersTable from "../Tables/DashboardTables/TotalRegisteredUsersTable";

const AccountActivationPanel = () => {
    return(
        <Fragment>
            <div>Heading</div>
            <div>Search</div>
            <TotalRegisteredUsersTable/>
        </Fragment>
    )
};

export default AccountActivationPanel;