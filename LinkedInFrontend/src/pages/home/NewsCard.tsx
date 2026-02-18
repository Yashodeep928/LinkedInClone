import './NewsCard.css'
import { Link } from 'react-router-dom'
function NewsCard (){
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
                
            <button className='news-card-showmore' >Show more</button>
            </div>

        
        </div>
        
        </>
    )
}

export default NewsCard