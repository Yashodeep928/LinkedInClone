import {useState} from "react"
import "./puzzlecard.css"
function PuzzleCard() {

  const [index,setIndex] = useState(0)


  const prev = () =>{
    setIndex(index - 1)
  }
 

  const next = () => {

    setIndex(index + 1)
    
    
  }

  return (
    <>
   
   <div className="puzzle-card">
   
     <div className="upper-row">
     <p>Your morning puzzle is ready 🌄</p>
     <div className="Button-grp">

    <button onClick={prev}>&#8249;</button>
     <button onClick={next}>&#8250;</button>

     </div>
    
     </div>


     <div className="carousel-track"
     style={{
      transform: `translateX(-${index * 100}%)`
     }}
     
     >

    
     <div className="parent-down-row">

        <div className="down-row2">

            <img src="" alt="image" />

             <div className="puzzle-info">
               <p>Puzzle Info</p>
               <p>Patches</p>
             </div>

             <button className="btn-1">Solve</button>
        </div>





         <div className="down-row2">

            <img src="" alt="image" />

             <div className="puzzle-info">
               <p>Puzzle Info</p>
               <p>Patches</p>
             </div>

             <button className="btn-1">Solve</button>
        </div>



         <div className="down-row2">

            <img src="" alt="image" />

             <div className="puzzle-info">
               <p>Puzzle Info</p>
               <p>Patches</p>
             </div>

             <button className="btn-1">Solve</button>

        </div>


        <div className="down-row2">

            <img src="" alt="image" />

             <div className="puzzle-info">
               <p>Puzzle Info</p>
               <p>Patches</p>
             </div>

             <button className="btn-1">Solve</button>

        </div>



        <div className="down-row2">

            <img src="" alt="image" />

             <div className="puzzle-info">
               <p>Puzzle Info</p>
               <p>Patches</p>
             </div>

             <button className="btn-1">Solve</button>

        </div>


     </div>

</div>
        

   </div>

    
    
    </>
  )
}

export default PuzzleCard