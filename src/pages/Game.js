import Title from '../components/Title';
import Level from '../components/Level';
import Problem from '../components/Problem';
import Next from '../components/Next';
import { useState, useContext } from 'react';
// import { useLevelContext } from '../data/localLevel'
import { LevelContext } from '../data/LevelContext';

export default function Game() {
  const {level, setLevel} = useContext(LevelContext);

  // Check if the user makes a choice
  const [choiceMade, setChoiceMade] = useState(false);
  const toogleChoiceMade = () => { setChoiceMade(!choiceMade); }

  return (
    <div className='game'>
      <Title />
      <Level level={level} />
      <Problem level={level} choiceMade={choiceMade} toogleChoiceMade={toogleChoiceMade} />
      <Next level={level} setLevel={setLevel} choiceMade={choiceMade} toogleChoiceMade={toogleChoiceMade} />
    </div>
  )
}
