import levels from '../data/levels.json';

export default function Next({level, incrementLevel, next, toogleDisplay}) {
  const handleNext = () => {
    toogleDisplay();
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
