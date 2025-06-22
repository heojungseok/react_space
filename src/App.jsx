import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import InitState from './pages/initState';

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <BrowserRouter>
        <nav style={{ padding: '3rem', borderBottom: '1px solid #ccc' }}>
          <Link to="/init-state">InitState</Link>
          <br></br>
        </nav>

        <Routes>
          <Route path="/init-state" element={<InitState />} />
        </Routes>
      </BrowserRouter>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
