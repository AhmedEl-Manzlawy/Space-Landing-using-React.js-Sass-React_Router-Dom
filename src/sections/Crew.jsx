import React, { useState } from 'react'
import data from '../data.js'
import numOne from '../assert/crew/image-douglas-hurley.png'
import numTwo from '../assert/crew/image-mark-shuttleworth.png'
import numThree from '../assert/crew/image-victor-glover.png'
import numFour from '../assert/crew/image-anousheh-ansari.png'
function Crew() {

  const[crewNum , setCrewNum] = useState(0);
  let crewSpace = [
    numOne,numTwo,numThree,numFour
  ]

  const crewNavigation =React.useRef();

  function switchCrew(e){
    setCrewNum(e.target.dataset.index)
    let children = crewNavigation.current.children
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove('active')
    }
    e.target.classList.add('active')
  }

  return (
    <div className='crew'>
    <div className='crew-content'>
     {
      <>
      <div className='crew-content-subtittle'>
        <span>02</span>MEET YOUR CREW
        </div>
        <div className='crew-content-images'>
          <img className='img' src={crewSpace[crewNum]} alt={data.crew.name}/>
        </div>
        <div ref={crewNavigation} className='crew-content-navigation'>
          <div data-index={0} onClick={switchCrew} className='tab active' ></div>
          <div data-index={1} onClick={switchCrew} className='tab ' ></div>
          <div data-index={2} onClick={switchCrew} className='tab ' ></div>
          <div data-index={3} onClick={switchCrew} className='tab ' ></div>
        </div>
        <div className='crew-data'>
        
        <h1 className='crew-content-tittle'>
        {data.crew[crewNum].role}
        </h1>
        <h1 className='crew-content-names'>
          {data.crew[crewNum].name}
        </h1>
        <p className='crew-content-info'>
          {
            data.crew[crewNum].bio
          }
        </p>
        </div>
      </>
     }

    </div>
    </div>
  )
}

export default Crew