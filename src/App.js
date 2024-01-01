import { MemoryRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import End from "./pages/End";
import { LevelContext } from './data/LevelContext';
import { useState, useEffect } from "react";

function App() {
  const [level, setLevel] = useState(() => {
    const begin = localStorage.getItem("level");
    return begin ? parseInt(JSON.parse(begin)) : 0
  });

  useEffect(() => {
    localStorage.setItem('level', JSON.stringify(level))
  }, [level])

  return (
    <LevelContext.Provider value={{level, setLevel}}>
    <MemoryRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </div>
    </MemoryRouter>
    </LevelContext.Provider>
  );
}

export default App;
