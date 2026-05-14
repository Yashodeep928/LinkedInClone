import "./suggestion.css"

function Suggestion() {
    const arrayElements = [1,2,3,4,5,6]
  return (
    <>
       <div className="suggestion-parent-container">

        <div className="suggestion-upper-row">
            <p>Suggestions for you</p>
        </div>


        <div className="suggestion-down-row">

           {
            arrayElements.map((_,index)=>{
                return(
                   <div className="card" key={index}>
                            <img src="image" alt="image" />
                            <h4>Yashodeep Deshpande</h4>
                            <p>Docker || Kubernetes</p>
                            <button>Connect</button>
                        </div>
                )
            })


           } 
           

        </div>





       </div>
    
    </>
  )
}

export default Suggestion