import { useNavigate } from "react-router-dom";
// The end (morale) + share the game + another one ?
export default function End() {
  const navigate = useNavigate(); 
  const reset = () => {
    navigate("/");
  } 

  return (
    <div>
      <h1>Your current level is </h1>
      <button onClick={reset}>Navigation</button>
    </div>
  )
}
