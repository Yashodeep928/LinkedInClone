import { Link } from "react-router-dom"
import "./MiddleNetworkBox.css"

function NetworkBox() {
  return (
    <div className="box">
      <Link className="link" to="/grow">Grow</Link>
      <Link className="link" to="/active">Active</Link>
    </div>
  )
}

export default NetworkBox