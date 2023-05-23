import React, { useState } from 'react';
import DebitBanner from '../components/debitBanner/DebitBanner';
import DirectDebitForm from '../components/directDebitForm/DirectDebitForm'

const Debit = () => {
    const [kidValue, setKidValue] = useState();
    const [kidLabel, setKidLabel] = useState();

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <DebitBanner idx="2" color="#F4C4D2"
            // kidValue={kidValue} kidLabel={kidLabel} onClick={(kidValue, kidLabel) => props.onChange(kidValue, kidLabel)}
            />
            <DirectDebitForm kidValue={kidValue} kidLabel={kidLabel}/>
        </div>
    );
};

export default Debit;