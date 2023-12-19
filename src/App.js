import { MemoryRouter, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import End from "./pages/End";
import Error from "./pages/Error";

function App() {
  return (
    <MemoryRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/end" element={<End />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </MemoryRouter>
  );
}

export default App;
