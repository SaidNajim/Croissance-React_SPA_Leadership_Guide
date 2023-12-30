import { useNavigate } from "react-router-dom";
import { useLevelContext } from '../data/localLevel';
// The end (morale) + share the game + another one ?
export default function End() {
  const navigate = useNavigate(); 
  const reset = () => {
    navigate("/");
  } 

  var [level] = useLevelContext(0);

  return (
    <div>
      <h1>Your current level is {level}</h1>
      <button onClick={reset}>Navigation</button>
    </div>
  )
}
