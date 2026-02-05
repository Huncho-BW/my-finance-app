import React from "react";
import OverView from "../Components/Overview";
import Transaction from "../Components/Transaction";
import Budget from "../Components/Budget";
import Pots from "../Components/pots";
import RecurringBill from "../Components/Recurring";
import Edits from "../Components/AddPot";
import EditPot from "../Components/EditPot";
import Delete from "../Components/delete";
import Withdral from "../Components/WithDraw";

const routeConfig = {
  main: [
    { path: "/", element: <OverView /> },
    { path: "Transaction", element: <Transaction /> },
    { path: "Budget", element: <Budget /> },
    { path: "Pots", element: <Pots /> },
    { path: "recurring", element: <RecurringBill /> },
    { path: "edit", element: <Withdral /> },
    { path: "delete", element: <Delete /> },
  ],
};

export default routeConfig;
