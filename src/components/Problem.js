import first from '../images/first.gif';
import levels from '../data/levels.json';

export default function Problem() {
  return (
    <div className="problem">
      <img className='image' src={first} alt="" />
      <p>Un membre de l'équipe suggère de modifier légèrement le processus de cuisson pour améliorer la texture du pain. Cependant, cela signifierait lui donner plus de responsabilités dans la cuisson.</p>
      <div className="choices">
        <div className="first">
          <button><p>Refusez la suggestion</p></button>
        </div>
        <div className="second">
          <button><p>Discuter la suggestion</p></button>
        </div>
      </div>
    </div>
  )
}
