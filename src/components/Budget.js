import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const [budget, setBudget] = useState('');
    const { expenses } = useContext(AppContext);
    const submitEvent = () => {

        if(budget > 20000) {
            alert("The value cannot exceed remaining funds  £20000.");
            setBudget("");
            return;
        } else if(budget < expenses) {
            alert("You cannot reduce the budget lower than spending.");
            setBudget("");
            return;
        }
    };

    return(
        /*This componenet provide the structure and style of the
        budget component on the upper-left of the app. */
        <div className='alert alert-secondary'>
            <span>Budget: £
            <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
            </input>
            <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                Save
            </button>
            </span>
        </div>
    );
};

export default Budget;