import { Link } from "react-router-dom"
import "./MiddleNetworkBox.css"

function NetworkBox() {
  return (
    <>
    <div className="box">
      <Link to='/grow'>Grow</Link>
      <Link to='/active'>Active</Link>
    </div>
    </>
  )
}

export default NetworkBox