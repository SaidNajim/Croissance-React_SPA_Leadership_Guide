import Title from '../components/Title';
import Level from '../components/Level';
import Problem from '../components/Problem';
import Next from '../components/Next';
import { useState } from 'react';

export default function Game() {
  var [level, setLevel] = useState(0);
  const incrementLevel = () => {
    setLevel((level + 1) % 10);
  }

  var [next, setNext] = useState(true);
  const toogleDisplay = () => {
    setNext(!next);
  }

  return (
    <div className='game'>
      <Title level={level} />
      <Level level={level} />
      <Problem level={level} next={next} toogleDisplay={toogleDisplay} />
      <Next level={level} incrementLevel={incrementLevel} next={next} toogleDisplay={toogleDisplay} />
    </div>
  )
}