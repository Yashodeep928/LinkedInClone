import "./InviteCard.css"
function InviteCard() {
  return (
    <>
    <div className="invite-card">


      <div className="upper-row">
        <p>Invitations <span>1</span></p>
        <button>Show All</button>
      </div>

      <div className="down-row">
        <img src="Yashodeep.JPG" alt="Image tag" />
        <div className="btn-grp">
           <button>Ignore</button>
        <button>Accept</button>

        </div>
       
      </div>


    </div>
    
    
    </>
  )
}

export default InviteCard