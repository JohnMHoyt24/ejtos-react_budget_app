import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);

    return(
        /*This componenet provide the structure and style of the
        budget component on the upper-left of the app. */
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
};

export default Budget;