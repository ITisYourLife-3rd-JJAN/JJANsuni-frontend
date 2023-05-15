import React from 'react';
import DebitHistoryForm from '../components/debitHistoryForm/DebitHistoryForm';
import DebitBanner from '../components/debitBanner/DebitBanner';

const KidDebitHistory = () => {
    return (
        <div>
            <DebitBanner/>
            <DebitHistoryForm isParent={ false}/>
        </div>
    );
};

export default KidDebitHistory;