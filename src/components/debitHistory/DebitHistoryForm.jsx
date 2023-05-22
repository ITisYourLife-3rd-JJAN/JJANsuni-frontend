import React from 'react';
import './debitHistoryForm.css';
import DebitHistory from './DebitHistory';

const DebitHistoryForm = ({isParent}) => {

    const backgroundColor = isParent? '#FCFF5C':'#FCFF5C';
    return (
        <div className='debitHistory' style={{backgroundColor:backgroundColor}}>
            <table className='debitTable'>
                <DebitHistory/>
            </table>
        </div>
    );
};

export default DebitHistoryForm;