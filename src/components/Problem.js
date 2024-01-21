import first from '../images/first.gif';
import levels from '../data/levels.json';

export default function Problem({level, choiceMade, toogleChoiceMade}) {
  return (
    <div className="problem">
      <img className='image' src={first} alt="" />
      <p id="situation">{levels[level].situation}</p>
      <div className="choices" style={{display: choiceMade ? 'none' : 'flex' }}>
        <div className="first">
          <button onClick={toogleChoiceMade}><p>{levels[level].choice1}</p></button>
        </div>
        <div className="second">
          <button onClick={toogleChoiceMade}><p>{levels[level].choice2}</p></button>
        </div>
      </div>
    </div>
  )
}
