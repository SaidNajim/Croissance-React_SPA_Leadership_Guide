import Title from './components/Title';
import Level from './components/Level';
import Problem from './components/Problem';
import Next from './components/Next';
import { useState } from 'react';

function App() {
  var [level, setLevel] = useState(0);

  const handleClick = () => {
    setLevel((level + 1) % 10);
  }

  return (
    <div className="App">
      <Title level={level} />

      <Level level={level} />

      <Problem level={level} handleClick={handleClick} />

      <Next level={level} handleClick={handleClick} />
    </div>
  );
}

export default App;
