import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>

    <div className="footercontainer">
  <Link to="/about">About</Link>
  <Link to="/accessibility">Accessibility</Link>
  <Link to="/help">Help Center</Link>
  <Link to="/privacy">Privacy & Terms</Link>
  <Link to="/ad-choices">Ad Choices</Link>
  <Link to="/advertising">Advertising</Link>
  <Link to="/business-services">Business Services</Link>
  <Link to="/get-app">Get the LinkedIn App</Link>
  <Link to="/more">More</Link>

  <span className="copyright">
    LinkedIn Corporation © 2026
  </span>
</div>
  
    </>
  )
}

export default Footer