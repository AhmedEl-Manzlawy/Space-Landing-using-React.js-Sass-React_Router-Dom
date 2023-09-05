import React, { useEffect, useRef, useState } from "react";
import firstlandscape from "../assert/technology/image-launch-vehicle-landscape.png";
import secondlandscape from "../assert/technology/image-spaceport-landscape.png";
import thiredlandscape from "../assert/technology/image-space-capsule-landscape.png";


import desktopfirstlandscape from "../assert/technology/image-launch-vehicle-portrait.jpg";
import desktopsecondlandscape from "../assert/technology/image-spaceport-portrait.jpg";
import desktopthiredlandscape from "../assert/technology/image-space-capsule-portrait.jpg";
import data from "../data";

function Technology() {

  const landscape = [firstlandscape, secondlandscape, thiredlandscape];
  const portrait = [desktopfirstlandscape, desktopsecondlandscape, desktopthiredlandscape];

  const [tech, setTech] = useState(0);
  const[mobile , setMobile]=useState(()=>{
    if(window.innerWidth <1200){
      return true
    }else{
      return false
    }
  })
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      if(window.innerWidth < 1200){
        setMobile(true)
      }else{
        setMobile(false)
      }
    })
  },[])

  const techNavigation =useRef();
  function switchNums(e) {
    setTech(e.target.dataset.index)
    console.log(e.target.dataset.index);
    let children = techNavigation.current.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove('active')
    }
    e.target.classList.add('active')
  }
  return (
    <div className="tech">
      <div className="tech-content">
        {
          <>
            <div className="tech-content-subtittle">
              <span>03</span>SPACE LAUNCH 101
            </div>
            <div className="tech-content-images">
              {/* <img className="img" alt="" src={landscape[tech]} /> */}
              <img className="img" alt="" src={mobile === true ? landscape[tech] : portrait[tech]}/>
            </div>
            <div ref={techNavigation} className="tech-content-navigation">
              <div data-index={0} onClick={switchNums} className="tab active">
                1
              </div>
              <div data-index={1} onClick={switchNums} className="tab ">
                2
              </div>
              <div data-index={2} onClick={switchNums} className="tab ">
                3
              </div>
            </div>
            <div className="tech-data">
              <div className="tech-content-tittle">
              <p>THE TERMINOLOGY...</p>
            </div>
            <h1 className="tech-content-names">{data.technology[tech].name}</h1>
            <p className="tech-content-info">
              {data.technology[tech].description}
            </p>
            </div>
            
          </>
        }
      </div>
    </div>
  );
}

export default Technology;
