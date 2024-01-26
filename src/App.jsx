// import { useState } from 'react'
import './App.css'
import Demo from './StyleX/Demo';
// import Login from './componenets/Login'
// import useDark from './utils/useDark';

function App() {

  // const [theme, setTheme] = useDark();

  // const handleDarkMode = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  return (
    <div >
      {/* <button onClick={handleDarkMode}>{theme === "light" ? "Dark" : "Light"}</button> */}
      {/* <Login /> */}
      <Demo />
    </div>
  )
}

export default App
