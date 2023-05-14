import React from 'react';
import DebitBanner from '../components/debitBanner/DebitBanner';
import DirectDebitForm from '../components/directDebitForm/DirectDebitForm'

const Debit = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <DebitBanner idx="2"/>
            <DirectDebitForm/>
        </div>
    );
};

export default Debit;