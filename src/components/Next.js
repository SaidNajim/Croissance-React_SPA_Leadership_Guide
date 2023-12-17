import levels from '../data/levels.json';

export default function Next({level, handleClick}) {
  const handleNext = () => {
    
  }

  return (
    <div className='next'>
      <div className="explanation">
        <p>{levels[level].explication}</p>
      </div>
      
      <div className="btn">
        <button onClick={handleNext}><p>Next  →</p></button>
      </div>
    </div>
  )
}
