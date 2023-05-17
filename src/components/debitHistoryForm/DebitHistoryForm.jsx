import React from 'react';
import './debitHistoryForm.css';

const DebitHistoryForm = ({isParent}) => {

    const backgroundColor = isParent? '#FCFF5C':'#FCFF5C';
    return (
        <div className='debitHistory' style={{backgroundColor:backgroundColor}}>
            <table className='debitTable'>
                <tr>
                    <td>이체 날짜</td>
                    <td>{isParent? '받는 사람' : '보내는 사람'}</td>
                    <td>이체 메시지</td>
                    <td>이체 금액</td>
                </tr>
                    <tr>
                        <td>2023/04/11</td>
                        <td>정길연</td>
                        <td>4월 용돈</td>
                        <td>-20,000</td>
                    </tr>
            </table>
        </div>
    );
};

export default DebitHistoryForm;