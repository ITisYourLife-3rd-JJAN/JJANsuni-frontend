import React, { useState } from 'react';
import DebitBanner from '../components/debitBanner/DebitBanner';
import DirectDebitForm from '../components/directDebitForm/DirectDebitForm'
import Header from '../components/header/Header';

const Debit = () => {
    const [kidUserId, setKidUserId] = useState();
    const [kidUserName, setKidUserName] = useState();
    console.log(kidUserId, kidUserName)

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Header/>
            <DebitBanner idx="2" color="#F4C4D2" setKidUserId={setKidUserId} setKidUserName={setKidUserName}/>
            <DirectDebitForm kidUserId={kidUserId} kidUserName={kidUserName}/>
        </div>
    );
};

export default Debit;