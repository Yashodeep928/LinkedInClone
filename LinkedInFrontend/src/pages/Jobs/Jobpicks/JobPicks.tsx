import "./JobPicks.css"
import { X } from 'lucide-react';
function JobPicks() {
  return (
    <>
    <div className="jobs-section">

        <div className="jobs-header">
             <p>Top job picks for you</p>
             <p>Based on your profile, preferences, and activity like applies, searches, and saves</p>
        </div>



        <div className="jobs-content">


            <div className="jobs-card">

                <div className="left">

                    <img src="image" alt="image" />

                    <div className="job-content">
                       <h3>React Developer</h3>
                        <p>Reacr Developer</p>
                        <p>Reacr Developer</p>
                    </div>

                </div>
                


                  <div className="right">

                       <button className="cross-btn"><X color="black" size={22} /></button>

                  </div>
                
            </div>

           

        </div>


         <div className="jobs-content">


            <div className="jobs-card">

                <div className="left">

                    <img src="image" alt="image" />
                    
                    <div className="job-content">
                       <h3>React Developer</h3>
                        <p>Reacr Developer</p>
                        <p>Reacr Developer</p>
                    </div>

                </div>
                


                  <div className="right">

                       <button className="cross-btn"><X color="black" size={22} /></button>

                  </div>
                
            </div>

           

        </div>


    </div>
    
    
    </>
  )
}

export default JobPicks