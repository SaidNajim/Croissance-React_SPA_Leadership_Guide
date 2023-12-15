import levels from '../data/levels.json';

export default function Level({level}) {
  return (
    <div className="level">
      Level {levels[level].title} 
    </div>
  )
}
