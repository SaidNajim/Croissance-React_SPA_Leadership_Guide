import first from '../images/first.gif';
import levels from '../data/levels.json';
import { useRef, useEffect } from 'react';

export default function Problem({level, choiceMade, toogleChoiceMade}) {
  const glowInTextRef = useRef(null);
  const choicesRef = useRef(null);

  useEffect(() => {
    const glowInText = glowInTextRef.current;

    if (glowInText) {
      // Replace text by span characters
      let letters = glowInText.textContent.split("");

      glowInText.textContent = ""; 

      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        // Make letter appear after the one before
        span.style.animationDelay = `${i * 0.02}s`;
        glowInText.append(span);
      });
      // Hide buttons for choices
      choicesRef.current.style.display = 'none';
      setTimeout(() => {
        choicesRef.current.style.display = 'flex';
      }, (letters.length * 0.02) * 1000 + 500);
    }
  }, [level]);

  return (
    <div className="problem">
      <img className='image' src={first} alt="" />
      <p ref={glowInTextRef} id="situation">{levels[level].situation}</p>
      <div ref={choicesRef} className="choices" style={{display: choiceMade ? 'none' : 'flex' }}>
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
