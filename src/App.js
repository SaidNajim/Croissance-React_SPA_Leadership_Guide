import Title from './Title';
import Level from './Level';
import Problem from './Problem';

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
