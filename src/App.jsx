import React, { useState, useEffect } from "react";
import FoodMenuCard from "./components/FoodMenuCard";
import Header from "./components/Header";
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(isDarkMode ? 'Dark Mode Activated' : 'Light Mode Activated');
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} toggleTheme={toggleTheme} />
      <FoodMenuCard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
