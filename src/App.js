import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import Remaining from './components/Remaining';

import { AppProvider } from './context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <Budget />
                        </div> 

                        <div className='col-sm'>
                            <Remaining />
                        </div>   

                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div> 
                       
                        {
                            /* Add ExpenseList component here */
                        }         

                        {
                            /* Add ExpenseItem component here */
                        }        

                        {
                            /* Add AllocationForm component here under */
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
