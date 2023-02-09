import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    //expenses are imported from Context
    const { currency, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        //An accumulative total of the costs are calculated
        return (total += item.cost);
    }, 0);


    return(
        <div className={`alert alert-primary`}>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;

