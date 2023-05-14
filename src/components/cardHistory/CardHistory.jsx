import React from 'react';
import './cardHistory.css';

const CardHistory = () => {
    return (
        <div className='cardHistory'>
            <table className='cardTable'>
                <tr>
                    <th>사용처</th>
                    <th>사용일시</th>
                    <th>사용금액</th>
                </tr>
                <tr>
                    <td>멀캠마라탕 선릉점</td>
                    <td>2023/04/27 15: 31</td>
                    <td>11,200</td>
                </tr>
                <tr>
                    <td>우리동네문구 선릉역점</td>
                    <td>2023/04/11 10: 22</td>
                    <td>8,000</td>
                </tr>
                <tr>
                    <td>국수맛집</td>
                    <td>2023/04/01 12: 08</td>
                    <td>10,000</td>
                </tr><tr>
                    <td>토끼카페 선릉점</td>
                    <td>2023/03/24 18: 47</td>
                    <td>4,700</td>
                </tr><tr>
                    <td>냠냠만두 대치점</td>
                    <td>2023/03/17 11: 55</td>
                    <td>19,000</td>
                </tr>
            </table>
        </div>
    );
};

export default CardHistory;