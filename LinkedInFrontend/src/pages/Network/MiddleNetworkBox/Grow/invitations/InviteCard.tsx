import "./InviteCard.css"
function InviteCard() {
  return (
    <>
    <div className="invite-card">


      <div className="upper-row">
        <p>Invitations <span>1</span></p>
        <button className="btn-1">Show All</button>
      </div>

      <div className="down-row">
        <img src="Yashodeep.JPG" alt="Image tag" />
        <div className="btn-grp">
           <button className="btn-1">Ignore</button>
        <button className="btn-2">Accept</button>

        </div>
       
      </div>


    </div>
    
    
    </>
  )
}

export default InviteCard