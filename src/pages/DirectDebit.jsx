import React, { useEffect, useState } from 'react';
import DebitBanner from '../components/debitBanner/DebitBanner';
import DirectDebitForm from '../components/directDebitForm/DirectDebitForm'
import Header from '../components/header/Header';
import axios from 'axios';

const Debit = () => {
    const userId = sessionStorage.getItem("userId")
    const [kidUserId, setKidUserId] = useState();
    const [kidUserName, setKidUserName] = useState();
    console.log(kidUserId, kidUserName)

    // const [receiveKid, setReceiveKid] = useState([]);

    // useEffect(() => {
    //     const getDirect = async () => {
    //         await axios
    //         .get(`http://localhost:8080/api/v1/directs/${userId}`)
    //         .then((respons) => {
    //             const data = respons.data.data
    //             console.log(data)
    //             const updateReceiveKid = data.map(child => (
    //                 child.autoReceivedUserId
    //             ))
    //             setReceiveKid(updateReceiveKid)
    //         })
    //     }
    //     getDirect()
    // }, [])

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Header/>
            <DebitBanner idx="2" color="#F4C4D2" setKidUserId={setKidUserId} setKidUserName={setKidUserName}/>
            <DirectDebitForm kidUserId={kidUserId} kidUserName={kidUserName}/>
        </div>
    );
};

export default Debit;