import React from 'react';
import DebitHistoryForm from '../components/debitHistoryForm/DebitHistoryForm';
import DebitBanner from '../components/debitBanner/DebitBanner';

const ParentDebitHistory = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <DebitBanner/>
            <DebitHistoryForm isParent={true}/>
        </div>
    );
};

export default ParentDebitHistory;