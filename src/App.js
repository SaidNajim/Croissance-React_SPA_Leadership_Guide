import Title from './components/Title';
import Level from './components/Level';
import Problem from './components/Problem';

function App() {
  return (
    <div className="App">
      {/* I COULS USE : Webkit transform & animation & keyframe */}
      {/* Just Squash - Composition */}
      {/* Title : logo + Name of the problem */}
      <Title />
      {/* Level : indicator */}
      <Level />
      {/* Illustration + explication + Decision*/}
      <Problem />
      {/* Explication + Next */}
    </div>
  );
}

export default App;
