import React, { useEffect, useState } from 'react';

// 임시 상수 & 컴포넌트 (필요시 별도 파일로 분리 가능)
const INIT_COUNT_STATE = 0;

function Item({ item }) {
  return <li>{item.name}</li>; // 데이터 구조에 맞게 수정
}

function InitState() {
  const [count, setCount] = useState(INIT_COUNT_STATE);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const resetState = () => {
    setCount(INIT_COUNT_STATE);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setList(result);
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={resetState}>Reset</button>

      <h3>List</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {list.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ul>
      )}
    </>
  );
}

export default function initState() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>InitState</h2>
      <InitState />
    </div>
  );
}
