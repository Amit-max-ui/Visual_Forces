import React, { useEffect, useState } from 'react'
import './Grid.css'
let start = Math.floor(Math.random() * 101);
let end;
do{
  end = Math.floor(Math.random()*101);
}while(end===start)


function Grid(props) {
  const gridSize = {row: props.gridSize.row, col:props.gridSize.col}
  const [windowSize, setWindowSize] = useState({ width:window.innerHeight, height:window.innerWidth})
  const [grid, setGrid] = useState([])
  const size = (Math.min(windowSize.width, windowSize.height)/ gridSize.row);
  function Spot(){
    this.f = 0;
    this.g = 0; 
    this.h = 0;
  }
  useEffect(() => {
    const boxes = []
    for (let i = 0; i < gridSize.row; i++) {
      for (let j = 0; j < gridSize.col; j++) {
        const newSpot = new Spot();
        if((i===0 || i===gridSize.row-1) && (j===0 || j===gridSize.col-1)){
          newSpot.f = 'true'
        }
        boxes.push(newSpot)
      }
    }
    setGrid(boxes)
  }, [])
  useEffect(() => {
    if (grid && grid.length > 0) {
      console.log(grid);
    }
  }, [grid]);
  const gridContainer = {
    width: Math.min(windowSize.width, windowSize.height),
    height: Math.min(windowSize.width, windowSize.height),
  }
  return (
      <div className='grid-container' style={gridContainer}>
      {
        // height + ' ' + width
        grid.map((item, index) => (
          <div 
            key={index}
            className={`box-${index}`}
            style={{
              width: size,
              cursor:'pointer',
              borderRadius: start===index || index===end ? size/10 : 'none',
              height: size,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              outline: '1px solid black',
              background: index===start ? 'red' : index===end ? 'white' : 'wheat'
            }} 
            onClick={()=>props.handleClick(index)}>
              {index===end && <div className='material-icons' style={{
                fontSize: size/(1.5)
              }}>stars</div>}
          </div>
        ))
      }
    </div>
  )
}

export default Grid





























































// import React, { useEffect, useState } from 'react'
// import './Grid.css'

// function Grid(props) {
//   const [color] = useState('blue')
//   const gridSize = {row: props.gridSize.row, col:props.gridSize.col}
//   const [windowSize, setWindowSize] = useState({ width:window.innerHeight, height:window.innerWidth})
//   const [grid, setGrid] = useState([])
//   const size = (Math.min(windowSize.width, windowSize.height)/ gridSize.row);
//   useEffect(()=>{
//     const boxes = []
//     for(let i = 0; i < gridSize.row; i++){
//       for(let j = 0; j < gridSize.col; j++){
//         const ele = React.createElement("div", {
//           className: `box-${i*gridSize.row+j}`,
//           key: `${i}+${j}`,
//           style: {
//             width: size,
//             height: size,
//             outline: '0.1px solid black',
//             background: 'white'
//           },
//           onClick: ()=>props.handleClick(i*gridSize.row+j, `box-${i*gridSize.row+j}`, color)
//         })
//         boxes.push(ele)
//       }
//       setGrid(boxes);
//     }
//   }, [])
//   console.log("Grid component has been rendered")
//   const gridContainer = {
//     width: Math.min(windowSize.width, windowSize.height),
//     height: Math.min(windowSize.width, windowSize.height),
//     background: 'black'
//   }
//   return (
//       <div className='grid-container' style={gridContainer}>
//       {
//         // height + ' ' + width
//         grid.map((_, index)=>{
//           return _
//         })
//       }
//     </div>
//   )
// }

// export default Grid
