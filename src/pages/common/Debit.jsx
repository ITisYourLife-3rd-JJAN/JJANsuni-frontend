import React from 'react';
import DebitBanner from '../../components/debitBanner/DebitBanner';
import DebitForm from '../../components/debitForm/DebitForm';

const Debit = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <DebitBanner idx="1" color='#E5FAFC'/>
            <DebitForm/>
        </div>
    );
};

export default Debit;