import React from 'react';
import DebitHistoryForm from '../components/debitHistory/DebitHistoryForm';
import DebitBanner from '../components/debitBanner/DebitBanner';

const DebitHistory = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <DebitBanner idx='0'/>
            <DebitHistoryForm/>
        </div>
    );
};

export default DebitHistory;