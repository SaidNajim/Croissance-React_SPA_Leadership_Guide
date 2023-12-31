import { MemoryRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import End from "./pages/End";
import Error from "./pages/Error";
import { LevelContext } from './data/LevelContext';
import { useState } from "react";

function App() {
  const [level, setLevel] = useState(0);

  return (
    <LevelContext.Provider value={{level, setLevel}}>
    <MemoryRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/end" element={<End />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </MemoryRouter>
    </LevelContext.Provider>
  );
}

export default App;
