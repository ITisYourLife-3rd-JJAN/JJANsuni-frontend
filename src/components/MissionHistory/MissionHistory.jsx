import React, { useEffect, useState } from 'react';
import './missionHistory.css'
import axios from 'axios';

export function publishedDate(publishDateValue) {
  const publishDate = new Date(publishDateValue);
  
  const currentDate = new Date();
  const second = (currentDate.getTime() - publishDate.getTime()) / 1000;

  let result;

  if (second < 60) {
    result = `${second}초 전`;
  } else if (second < 3600) {
    result = `${Math.floor(second / 60)}분 전`;
  } else if (second < 86400) {
    result = `${Math.floor(second / 3600)}시간 전`;
  } else if (second < 604800) {
    result = `${Math.floor(second / 86400)}일 전`;
  } else if (second < 2592000) {
    result = `${Math.floor(second / 604800)}주 전`;
  } else if (second < 31536000) {
    result = `${Math.floor(second / 2592000)}달 전`;
  } else {
    result = `${Math.floor(second / 31536000)}년 전`;
  }

  return result;
}

const MissionHistory = ({kidUserId, kidUserName}) => {

  console.log(kidUserId)

  const [info, setInfo] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const page = 6;
  const [errorMessage, setErrorMessage] = useState(null);

  // const data = [
  //   { id: 1, name: 'John', age: 1, addr: 'cj' },
  //   { id: 2, name: 'Jane', age: 2, addr: 'ic' },
  //   { id: 3, name: 'Bob', age: 3, addr: 'dj' },
  //   { id: 4, name: 'John', age: 4, addr: 'dh' },
  //   { id: 5, name: 'Jane', age: 5, addr: 'we' },
  //   { id: 6, name: 'Bob', age: 6, addr: 'bf' },
  //   { id: 7, name: 'John', age: 7, addr: 'bd' },
  //   { id: 8, name: 'Jane', age: 8, addr: 'hm' },
  //   { id: 9, name: 'Bob', age: 9, addr: 'er' },
  //   { id: 10, name: 'John', age: 10, addr: 'xc' },
  //   { id: 11, name: 'Jane', age: 11, addr: 'ef' },
  //   { id: 12, name: 'Bob', age: 12, addr: 'uy' },
  //   { id: 13, name: 'John', age: 13, addr: 'dg' },
  //   { id: 14, name: 'Jane', age: 14, addr: 'bv' },
  //   { id: 15, name: 'Bob', age: 15, addr: 'wr' },
  //   { id: 16, name: 'John', age: 16, addr: 'dj' },
  //   { id: 17, name: 'Jane', age: 17, addr: 'eg' },
  //   { id: 18, name: 'Bob', age: 18, addr: 'dd' },
  //   { id: 19, name: 'John', age: 19, addr: 'zz' },
  //   { id: 20, name: 'Jane', age: 20, addr: 'de' },
  //   { id: 21, name: 'Bob', age: 21, addr: 'mt' },
  //   { id: 22, name: 'John', age: 22, addr: 'ht' },
  //   { id: 23, name: 'Jane', age: 23, addr: 'fh' },
  //   { id: 24, name: 'Bob', age: 24, addr: 'sg' },
  //   { id: 25, name: 'John', age: 25, addr: 'er' },
  //   { id: 26, name: 'Jane', age: 26, addr: 'ku' },
  //   { id: 27, name: 'Bob', age: 27, addr: 'cd' },
  //   { id: 28, name: 'John', age: 28, addr: 'we' },
  //   { id: 29, name: 'Jane', age: 29, addr: 'ht' },
  //   { id: 30, name: 'Bob', age: 30, addr: 'dj' },
  // ];
  useEffect(() => {
    const missionHistoryAxios = () => {
      axios
        .get(`http://localhost:8080/api/v1/missions/${kidUserId}`)
        .then((response) => {
          if (response.data.businessCode === 'M002') {
            // console.log(response.data)
            setErrorMessage(response.data.errorMessage+"😂")
          } else {
            const info = response.data.data;
            setInfo(info)
          }
        })
    }
    missionHistoryAxios()
  }, [kidUserId])

  const getCurrData = () => {
    const sidx = (currPage -1) * page;
    const eidx = sidx + page;
    return info.slice(sidx, eidx)
  }

  const handlePage = (pageNum) => {
    setCurrPage(pageNum)
  }

  const firstPage = currPage === 1;
  const lastPage = currPage === Math.ceil(info.length / page);

  if (errorMessage) {
    return (
      <div className='mhistoryBox'>
        <div className='minnerBox2'>
          <div style={{textAlign: 'center'}}>{errorMessage}</div>
        </div>
      </div>
    );
  }


    
  if(kidUserId !== null) {

    return (
      <div className='mhistoryBox'>
        <div className='minnerBox'>
          <div className='mhistoryTable'>
            <div className='mcol fst'>맵 번호</div>
            <div className='mcol'>미션 번호</div>
            <div className='tle'>미션 제목</div>
            <div className='mcol lst'>수행 일시</div>
          </div>
          {getCurrData().map((item) => (
            <div className={`itmbox ${item.status === 1 ? 'correctbg' : 'wrongbg'}`} key={item.userMissionId}>
              <div className='mhistoryRow' key={item.userMissionId}>
                <div className='mcol fst'>{item.solvedMission.mapNum}</div>
                <div className='mcol'>{item.solvedMission.missionNum}</div>
                <div className='tle'>{item.solvedMission.title}</div>
                <div className='mcol lst'>{publishedDate(item.createAt)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className='paginations'>
          <div
            onClick={() => handlePage(currPage-1)}
            className={firstPage ? 'disabled' : 'abled'}
          >
            <div>&lt;</div>
            <div>이전</div>
          </div>
          <div
            onClick={() => handlePage(currPage+1)}
            className={lastPage ? 'disabled' : 'abled'}
          >
            <div>&gt;</div>
            <div>다음</div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className='mhistoryBox'></div>
    )
  }
};

export default MissionHistory;