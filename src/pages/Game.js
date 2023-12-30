import Title from '../components/Title';
import Level from '../components/Level';
import Problem from '../components/Problem';
import Next from '../components/Next';
import { useState } from 'react';
// import { useLevelContext } from '../data/localLevel'
import { useNavigate } from "react-router-dom";

export default function Game() {
  const navigate = useNavigate();
  const [level, setLevel] = useState(0);
  // const [level, setLevel] = useLevelContext();
  console.log('Level:', level);
  const incrementLevel = () => {
    if (level === 9) {
      navigate("/end");
    }
    setLevel((level + 1) % 10);
  }

  const [next, setNext] = useState(true);
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
