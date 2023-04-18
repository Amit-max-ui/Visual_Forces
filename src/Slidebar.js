import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Slidebar() {
    const[slide, setSlide] = useState(true);
    useEffect(()=>{
        console.log(slide);
    },[slide])
    const content1 = {
        transform: slide ? 'translateX(0)' : 'translateX(-100%)'
    }
  return (
    <div className='row'> 
        <i className="material-icons menu" onClick={()=>setSlide(!slide)}>menu</i>
        <div className="col l2 m3 s12 content-1" style={content1}>
        <div className="searchBar white-text">
            <input type="text" className='white-text'placeholder='search'/>
            <i className="material-icons searchIcon">search</i>
        </div>
        <div className="games">
            {/* <a href='/Micro-mouse' className='game 1'>MicroMousedsfsdfdsfsdfsdafafdsffdsf</a> */}
            <Link to='/Micro-mouse' className='game 1' onClick={()=>setSlide(!slide)}>Micro-Mouse</Link>
            <Link to='/Long-leg' className='game 2' onClick={()=>setSlide(!slide)}>Long-Legs</Link>
            <Link to="/Chain-chips" className='game 3' onClick={()=>setSlide(!slide)}>Chain-chips</Link>
        </div>
        </div>
    </div>
  )
}

export default Slidebar