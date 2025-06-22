import React, { useEffect, useState } from 'react';
/**
 * 리액트에서 관리하지 않으므로
 * 컴포넌트 외부로 옮기기
 */
const INFO = {
	name: 'My Component',
	value: 'Clean Code React',
};
// 👉 ShowCount 컴포넌트
function ShowCount({ info, count }) {
  return (
    <section>
      <h3>{info.name}</h3>
      <p>{info.value}</p>
      <p>현재 카운트: {count}</p>
    </section>
  );
}

// 👉 ButtonGroup 컴포넌트
function ButtonGroup({ onIncrement, onDecrement }) {
  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={onDecrement}>감소</button>
      <button onClick={onIncrement} style={{ marginLeft: '8px' }}>증가</button>
    </div>
  );
}
// 👉 실제 동작 컴포넌트
function NotUpdateValue() {
	const [count, setCount] = useState(0);

	const onIncrement = () => setCount((prevCount) => prevCount);
	const onDecrement = () => setCount((prevCount) => prevCount);

	return (
		<div className="App">
			<main className="App-main">
				<header>{INFO}</header>
				<ShowCount info={INFO} count={count} />
				<ButtonGroup onDecrement={onDecrement} onIncrement={onIncrement} />
			</main>
		</div>
	);
}

export default function notUpdateValue() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>NotUpdateValue</h2>
      <NotUpdateValue />
    </div>
  );
}