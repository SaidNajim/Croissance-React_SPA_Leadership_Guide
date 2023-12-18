import first from '../images/first.gif';
import levels from '../data/levels.json';

export default function Problem({level, next, toogleDisplay}) {
  return (
    <div className="problem">
      <img className='image' src={first} alt="" />
      <p id="situation">{levels[level].situation}</p>
      <div className="choices" style={{display: next ? 'flex' : 'none' }}>
        <div className="first">
          <button onClick={toogleDisplay}><p>{levels[level].choice1}</p></button>
        </div>
        <div className="second">
          <button onClick={toogleDisplay}><p>{levels[level].choice2}</p></button>
        </div>
      </div>
    </div>
  )
}
