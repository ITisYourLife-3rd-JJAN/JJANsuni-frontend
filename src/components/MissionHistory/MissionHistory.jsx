import './missionHistory.css'

const MissionHistory = () => {

  const data = [
    { id: 1, name: 'John', age: 25, addr: 'cj' },
    { id: 2, name: 'Jane', age: 30, addr: 'ic' },
    { id: 3, name: 'Bob', age: 35, addr: 'dj' },
  ];

  return (
      <div>
        <div>rk</div>
        <div>rk</div>
        <div>rk</div>
        <div>rk</div>
        <div>rk</div>
        <div className='mhistoryBox'>
          <div className='minnerBox'>
            <div className='mhistoryTable'>
              <div>맵 번호</div>
              <div>미션 번호</div>
              <div>수행 일시</div>
            </div>
            {data.map((item) => (
              <div className='mhistoryRow' key={item.id}>
                <div>{item.name}</div>
                <div>{item.age}</div>
                <div>{item.addr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default MissionHistory;