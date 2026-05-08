import "./premium.css"
import { useState } from "react";
function Premium() {

    const [index,setIndex] = useState(0);

    const prev = () => {
  setIndex((prev) => Math.max(prev - 1, 0));
};

const next = () => {
  setIndex((prev) => Math.min(prev + 1, 2));
};

  return (
    <>
    <div className="premium-section">

        <div className="upper-row">
            <p>People who are hiring for your role</p>
            <div className="premium-btn-group">
            <button onClick={prev} className="btn-round" title="Previous">&#8249;</button>
            <button onClick={next} className="btn-round" title="Next">&#8250;</button>
            <button className="btn-cut" title="Cut">&times;</button>

            </div>
           
        </div>


        <div className="premium-carousel-track" style={{transform:`translateX(-${index * 100}%)`}}>

            <div className="down-row-premium">
                <div className="premium-info">
                <img src="" alt="Image" />
                <p>LinkedIn Member</p>
                </div>
               
                <button>View profile</button>

            </div>

            <div className="down-row-premium">
                <div className="premium-info">
                <img src="" alt="Image" />
                <p>LinkedIn Member</p>
                </div>
               
                <button>View profile</button>

            </div>

            <div className="down-row-premium">
                <div className="premium-info">
                <img src="" alt="Image" />
                <p>LinkedIn Member</p>
                </div>
               
                <button>View profile</button>

            </div>


            
            
        </div>

    </div>
    
    
    </>
  )
}

export default Premium