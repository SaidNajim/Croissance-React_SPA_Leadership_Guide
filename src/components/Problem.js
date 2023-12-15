import first from '../images/first.gif';
import levels from '../data/levels.json';

export default function Problem({level, handleClick}) {
  return (
    <div className="problem">
      <img className='image' src={first} alt="" />
      <p id="situation">{levels[level].situation}</p>
      <div className="choices">
        <div className="first">
          <button onClick={handleClick}><p>{levels[level].choice1}</p></button>
        </div>
        <div className="second">
          <button onClick={handleClick}><p>{levels[level].choice2}</p></button>
        </div>
      </div>
    </div>
  )
}
