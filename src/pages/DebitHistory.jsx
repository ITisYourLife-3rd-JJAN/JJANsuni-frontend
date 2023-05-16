import React from 'react';
import DebitHistoryForm from '../components/debitHistoryForm/DebitHistoryForm';
import DebitBanner from '../components/debitBanner/DebitBanner';

const DebitHistory = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <DebitBanner/>
            <DebitHistoryForm/>
        </div>
    );
};

export default DebitHistory;