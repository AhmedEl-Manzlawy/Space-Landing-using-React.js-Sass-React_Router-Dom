import React, { useState , useRef} from "react";
import moon from "../assert/destination/image-moon.png";
import mars from "../assert/destination/image-mars.png";
import europa from "../assert/destination/image-europa.png";
import titan from "../assert/destination/image-titan.png"
import data from "../data"
function Destination() {
  // console.log(data.destinations[0]);
  const [planetNum , setPlanetNum] = useState(0);
  const navigation = useRef()
  let plants = [
    moon , mars , europa , titan
  ]
  function switchTab(e){
    setPlanetNum(e.target.dataset.index);
    // e.target.classList.add('active')
    
    let children = navigation.current.children;
    // console.log(children);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove('active')
    }
    e.target.classList.add('active')
    
  }
  return (
    <div className="destination">
      <div className="destination-content">
        {
          <>
          <div className="destination-content-subtitle">
          <span>01 </span> PICK YOUR DESTINATION
        </div>
        
         <div className="destination-content-images">
          <img className="img" alt="moon" src={plants[planetNum]} />
        </div>
        <div ref={navigation} className="destination-content-navigation">
          <div data-index={0} onClick={switchTab} className="tab active">MOON</div>
          <div data-index={1} onClick={switchTab} className="tab">MARS</div>
          <div data-index={2} onClick={switchTab} className="tab">EUROP</div>
          <div data-index={3} onClick={switchTab} className="tab">TITAN</div>
        </div>
        <h1 className="destination-content-title">{data.destinations[planetNum].name}</h1>
        <p className="destination-content-body">
          {data.destinations[planetNum].description}
        </p>

        <div className="destination-content-info">
          <div className="distance">
            <p>AVG. DISTANCE</p>
            <h1>{data.destinations[planetNum].distance}</h1>
          </div>
          <div className="time">
            <p>EST. TRAVEL TIME</p>
            <h1>{data.destinations[planetNum].travel}</h1>
          </div>
        </div>
          </>
        }
      </div>
    </div>
  );
}

export default Destination;
 