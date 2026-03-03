import './Footer2.css'
import { Link } from 'react-router-dom'
function Footer2() {
  return (
    <>
    <footer className='footer'>
     
     <div className="footer2-row1">
        <Link to='/about'>About</Link>
        <Link to='/accessibility'>Accessibility</Link>
        <Link to='/help'>Help Center</Link>
     </div>

     <div className="footer2-row2">
        <Link to='/privacy'>Privacy & Terms</Link>
        <Link to='/Ad'>Ad Choices</Link>
        <Link to='/Advertising'>Advertising</Link>
     </div>

     <div className="footer2-row3">
        <Link to='/Business'>Business Service</Link>
        <Link to='/getApp'>Get the Linked App</Link>
        <Link to='/more'>More</Link>
     </div>
    </footer>
    
    </>
  )
}

export default Footer2