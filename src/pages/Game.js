import Title from '../components/Title';
import Level from '../components/Level';
import Problem from '../components/Problem';
import Next from '../components/Next';
import { useState, useContext } from 'react';
// import { useLevelContext } from '../data/localLevel'
import { useNavigate } from "react-router-dom";
import { LevelContext } from '../data/LevelContext';

export default function Game() {
  const {level, setLevel} = useContext(LevelContext);
  const navigate = useNavigate();
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
