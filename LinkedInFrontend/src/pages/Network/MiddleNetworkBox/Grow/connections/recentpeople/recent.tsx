import "./recent.css"
function Recent() {
    const ArrayOfElements = [1,2,3,4,5,6,7,8,9,10,11,12]

  return (
    <>

    <div className='recent-parent-container'>

        <div className="recent-upper-row">
            <p>People you may know based on your recent activity</p>
            <button>Show All</button>
        </div>

        <div className="recent-down-row">

            {
                ArrayOfElements.map((_,index)=>{
                    return (
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

export default Recent