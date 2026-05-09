import './mgm.css'

function MgM() {

    const ArrayOfElements = [1,2,3,4,5,6,7,8]

  return (
    <>
      <div className='parent-container'>

        <div className="mgm-upper-row">
            <p>People you may know from M.G.M's Jawaharlal Nehru College of Engineering</p>
            <button>Show All</button>
        </div>

        <div className="mgm-down-row">

            {
                ArrayOfElements.map((item,index)=>{
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

export default MgM