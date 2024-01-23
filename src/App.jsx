// import { useState } from 'react'
import './App.css'
import Login from './componenets/Login'
import useDark from './utils/useDark';

function App() {

  const [theme, setTheme] = useDark();

  const handleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`App ${theme}`}>
      <button onClick={handleDarkMode}>{theme === "light" ? "Dark" : "Light"}</button>
      <Login />
    </div>
  )
}

export default App
