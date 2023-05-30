import React from 'react';
import DebitHistoryForm from '../components/debitHistory/DebitHistoryForm';
import DebitBanner from '../components/debitBanner/DebitBanner';
import Header from '../components/header/Header';

const DebitHistory = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Header/>
            <DebitBanner idx='0'/>
            <DebitHistoryForm/>
        </div>
    );
};

export default DebitHistory;