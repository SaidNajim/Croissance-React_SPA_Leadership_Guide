import levels from '../data/levels.json';
import { useNavigate } from "react-router-dom";

export default function Next({level, setLevel, next, toogleChoiceMade}) {
  const navigate = useNavigate();

  const incrementLevel = () => {
    if (level === 9) {
      navigate("/end");
    }
    setLevel((level + 1) % 10);
  }
  
  const handleNext = () => {
    toogleChoiceMade();
    incrementLevel();
  }

  return (
    <div className='next' style={{display: next ? 'none' : 'flex' }}>
      <div className="explanation">
        <p>{levels[level].explication}</p>
      </div>
      
      <div className="btn">
        <button onClick={handleNext}><p>Next  →</p></button>
      </div>
    </div>
  )
}
