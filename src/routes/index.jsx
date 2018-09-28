import React from "react";
import { Route, Switch } from "react-router-dom";
import AccountActivationPanel from "../components/AccountActivationPanel/AccountActivationPanel";
import AccountStatus from "../components/AccountStatus/AccountStatus";
import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
import DailyReport from "../components/BalanceReport/DailyReport";
import SearchReport from "../components/BalanceReport/SearchReport";
import BuyCommissionSettings from "../components/CommissionsSettings/BuyCommissionSettings";
import SellCommissionSettings from "../components/CommissionsSettings/SellCommissionSettings";
import Info from "../components/CustomersInfo/Info";
import KycDetails from "../components/CustomersInfo/KycDetails";
import Dashboard from "../components/Dashboard/Dashboard";
import FiatWallet from "../components/FiatWallet/FiatWallet";
import KycApprovals from "../components/KycApprovals/KycApprovals";
import OpenOrdersToken from "../components/OpenOrdersToken/OpenOrdersToken";
import CreateUser from "../components/SuperAdmin/CreateUser";
import PageControl from "../components/SuperAdmin/PageControl";
import SetUserRights from "../components/SuperAdmin/SetUserRights";
import TradeHistoryToken from "../components/TradeHistoryToken/TradeHistoryToken";
import Transactions from "../components/Transactions/Transactions";
import BalanceReportTransfers from "../components/Transfers/BalanceReportTransfers";
import DepositTransfers from "../components/Transfers/DepositTransfers";
import WithdrawalTransfers from "../components/Transfers/WithdrawalTransfers";

export default ({ childProps }) => {
    return (
        <Switch>
            <Route path='/accountActivationPanel' component={AccountActivationPanel} />
            <Route path='/accountStatus' component={AccountStatus} />
            <Route path='/advancedSearch' component={AdvancedSearch} />
            <Route path='/dailyReport' component={DailyReport} />
            <Route path='/searchReport' component={SearchReport} />
            <Route path='/buyCommissionSettings' component={BuyCommissionSettings} />
            <Route path='/sellCommissionSettings' component={SellCommissionSettings} />
            <Route path='/info' component={Info} />
            <Route path='/kycDetails' component={KycDetails} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/fiatWallet' component={FiatWallet} />
            <Route path='/kycApprovals' component={KycApprovals} />
            <Route path='/openOrdersToken' component={OpenOrdersToken} />
            <Route path='/createUser' component={CreateUser} />
            <Route path='/pageControl' component={PageControl} />
            <Route path='/setUserRights' component={SetUserRights} />
            <Route path='/tradeHistoryToken' component={TradeHistoryToken} />
            <Route path='/transactions' component={Transactions} />
            <Route path='/balanceReportTransfers' component={BalanceReportTransfers} />
            <Route path='/depositTransfers' component={DepositTransfers} />
            <Route path='/withdrawalTransfers' component={WithdrawalTransfers} />
        </Switch>
    );
};