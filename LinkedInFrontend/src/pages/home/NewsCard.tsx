import './NewsCard.css'
import { useState } from 'react';
import { FaCaretDown, FaCaretUp} from 'react-icons/fa';
import { Link } from 'react-router-dom'
function NewsCard (){
     
    const [show,setShow] = useState(false)

    const openbox = ()=>{
        setShow(prev => !prev)
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

        
        </div>
        
        </>
    )
}

export default NewsCard