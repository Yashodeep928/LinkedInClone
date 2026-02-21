import './NewsCard.css'
import { useState } from 'react';
import { FaCaretDown, FaCaretUp, FaChevronRight} from 'react-icons/fa';
import { Link } from "react-router-dom";
function NewsCard (){
     
    const [show,setShow] = useState(false)
    const[showpuzzle,setShowpuzzle] = useState(false)

    const openbox = ()=>{
        setShow(prev => !prev)
    }

    const openpuzzle = ()=>{
      setShowpuzzle(prev => !prev)
    }

    return (
        <>

        <div className="news-card-container">

            <div className="news-card-header">
                <h3>LinkedIn News</h3>
                <button>i</button>
            </div>

            <div className="news-card-topstories">
                <span>Top stories</span>
                <Link to="/adani" className='stories-links'>  
                <span>Adani Group bets $100B on AI</span>
                </Link>
                <Link to="/adani"className='stories-links'>  
                <span>Adani Group bets $100B on AI</span>
                </Link>
                <Link to="/adani"className='stories-links'>  
                <span>Adani Group bets $100B on AI</span>
                </Link>
                
             
                <div className= {`new-news-links-box ${show ? "active" : ""}`}>
                <Link to="/adani" className='stories-links'>  
                <span>Adani Group bets $100B on AI</span>
                </Link>
                <Link to="/adani"className='stories-links'>  
                <span>Adani Group bets $100B on AI</span>
                </Link>
                <Link to="/adani"className='stories-links'>  
                <span>Adani Group bets $100B on AI</span>
                </Link>
                </div>
                
<button onClick={openbox} className='news-card-showmore'>
  {show ? (
    <>
      Show Less <FaCaretUp />
    </>
  ) : (
    <>
      Show More <FaCaretDown />
    </>
  )}
</button>
</div>

         <div className="puzzlesection">
          <span>Today's puzzle game</span>

      <Link to='#' className='puzzleLinks'><span><img src="" alt="" /> Zip#340</span><FaChevronRight className='arrowicon'/></Link>
      <Link to='#' className='puzzleLinks'><span><img src="" alt="" /> Zip#340</span><FaChevronRight className='arrowicon'/></Link>
      <Link to='#' className='puzzleLinks'><span><img src="" alt="" /> Zip#340</span><FaChevronRight className='arrowicon'/></Link>

      <div className={`puzzlelinkssection ${showpuzzle ?"active" : "" } `}>
        <Link to='#' className='puzzleLinks'><span><img src="" alt="" /> Zip#340</span><FaChevronRight className='arrowicon'/></Link>
      <Link to='#' className='puzzleLinks'><span><img src="" alt="" /> Zip#340</span><FaChevronRight className='arrowicon'/></Link>
      <Link to='#' className='puzzleLinks'><span><img src="" alt="" /> Zip#340</span><FaChevronRight className='arrowicon'/></Link>

      </div>
      <button className='news-card-showpuzzle' onClick={openpuzzle}>{showpuzzle ? (
    <>
      Show Less <FaCaretUp />
    </>
  ) : (
    <>
      Show More <FaCaretDown />
    </>
  )}</button>
    
        
         </div>

        
        </div>
        
        </>
    )
}

export default NewsCard