import React, { lazy, Suspense, useEffect, useState } from 'react';
import '../style/Game3.css'
const Grid = lazy(() => import('../components/Grid'))

function Game3() {
  const [obstacles, setObstacles] = useState([])
  const [obstacle, setSelectObstacle] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [gridSize, setGridSize] = useState({row: 10, col: 10});  
  useEffect(()=>{
    console.log(obstacle)
  },[obstacle])
  const changeSize = () => {
    setGridSize({row: 20, col: 20});
  }
  const handleClick = (index)=>{
    const element = document.querySelector(`.box-${index}`)
    if(obstacle){
      element.style.background = 'rgb(32,35,32)' 
      element.style.position = 'relative'
      element.style.transform = 'scale(1.05)'
      element.style.outline = '1px solid black'
      setObstacles([...obstacles, index])
    }
  }
  useEffect(()=>{
    console.log(gridSize)
  },[gridSize])
  return (
    <div className='rooted'>
      <div className='nvGca'>
        <div className='leftPart'>
          <div className='inputs'>
            <input type="text" placeholder='Enter no of rows' onChange={(e)=>setGridSize({...gridSize, row:e.target.value})}/>
            <input type="text" placeholder='Enter no of cols' onChange={(e)=>setGridSize({...gridSize, col:e.target.value})}/>
            <div className="btn green accent-4 waves-effect black" onClick={()=>setShowComponent(true)}>
              Create Grid
            </div>
          </div>
          <div className="buttons">
            <div className='btn blue darken-3 waves-effect waves-light' onClick={()=>setSelectObstacle(!obstacle)}>
              Click to select obstacle
            </div>
            <div className="btn blue darken-3 waves-effect waves-light" onClick={()=>{window.scrollTo(0, 370)}}>
              Click to Run Algorithm
            </div>
          </div>
        </div>
        <div className='middelPart'></div>
        <div className='rightPart'></div>
      </div>
      <div className='nvGcb'>
        {showComponent && (
          <Suspense fallback={<div>Loading...</div>}>
            <Grid message={"Row and Col are passed"} gridSize={gridSize} handleClick={handleClick} />
          </Suspense>
        )}
      </div>
    </div>
  )
  
}

export default Game3;
