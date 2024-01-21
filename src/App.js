import { MemoryRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import End from "./pages/End";
import { LevelContext } from './data/LevelContext';
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <Route path="/end" element={<Game />} />
          <Route path="/" element={<End />} />
        </Routes>
      </div>
    </MemoryRouter>
      <ToastContainer position="bottom-center" autoClose={3000} 
        hideProgressBar newestOnTop={false} closeOnClick rtl={false} 
        pauseOnFocusLoss draggable pauseOnHover theme="colored" />
    </LevelContext.Provider>
  );
}

export default App;
