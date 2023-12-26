import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// The end (morale) + share the game + another one ?
export default function End() {
  const navigate = useNavigate(); 
  const reset = () => {
    navigate("/");
  } 

  const [level, setLevel] = useState([]);

  useEffect(() => {
  const level = JSON.parse(localStorage.getItem('level'));
  if (level) {
   setLevel(level);
  }
}, []);
  return (
    <div>
      <button onClick={reset}>Navigation</button>
    </div>
  )
}
