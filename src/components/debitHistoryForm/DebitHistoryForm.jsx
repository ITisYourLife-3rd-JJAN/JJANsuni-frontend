import React from 'react';
import './debitHistoryForm.css';

const DebitHistoryForm = ({isParent}) => {

    const backgroundColor = isParent? '#FCFF5C':'#CDFF5C';
    return (
        <div className='debitHistory' style={{backgroundColor:backgroundColor}}>
            <table className='debitTable'>
                <thead>
                    <th>이체 날짜</th>
                    <th>{isParent? '받는 사람' : '보내는 사람'}</th>
                    <th>이체 메시지</th>
                    <th>이체 금액</th>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
};

export default DebitHistoryForm;