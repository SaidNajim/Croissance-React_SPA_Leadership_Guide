import Title from '../components/Title';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import bread from '../images/bread.png';
// The end (morale) + share the game + another one ?
export default function End() {
  const navigate = useNavigate(); 
  const reset = () => {
    navigate("/end");
  } 

  const share = () => {
    navigator.clipboard.writeText("Teste ton niveau en leadership\nchra.ma");
    toast.success("Message copié, partage-le !");
  }
  return (
    <div className="end">
      <Title />
      <img className='wiggle' src={bread} alt="bread" />
      <div className="end-btns">
        <button onClick={reset}><p>Recommencer 🔄</p></button>
        <button onClick={share}><p>Partager 🔗</p></button>
      </div>
      <div className="credits">
        <h3 id="madeBy">Réaliser par <a href="https://github.com/SaidNajim">N. Said</a></h3>
        <p>Inspiré de Neal.fun</p>
      </div>
    </div>
  )
}
