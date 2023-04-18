import React, { useEffect, useState } from 'react'
import '../style/Game2.css'

function Game2() {
  const newElement = React.createElement("div", {className: 'grid', id:'grid-item'}, React.createElement("h1", {className:'logo', id:'header-logo'}, "This is game-2"))
  const [obstacle, setObstacle] = useState([]);
  const addElement = ()=>{
    let num = Math.floor(Math.random() * 100) + 1;
    setObstacle([...obstacle, num]);
  }
  useEffect(()=>{
    console.log(obstacle);
  },[obstacle])
  return (
    <div>
      {newElement}
      <div className="btn" onClick={addElement}>click</div>
    </div>
  )
}

export default Game2
