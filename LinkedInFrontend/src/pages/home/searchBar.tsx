
import './searchBar.css'
import { FaVideo,FaImage } from 'react-icons/fa'; 
import { MdArticle } from "react-icons/md";

function SearchBar ()
{
    return(
        <>

        <div className="searchbar-container">

            <div className="uppersection">

                <img className='image' src="/src/assets/Yashodeep.JPG" alt="" />

                <button className='postbtn'><span>Start a Post</span> </button>
            </div>

            <div className="lowersection">
             
             <button className='searchbar-btn'>
                <span className='icon'><FaVideo /></span>
                Video
                </button>
             <button className='searchbar-btn'>
                <span className='icon'><FaImage/></span>
                 Photo
                 </button>
             <button className='searchbar-btn'><span className='icon'><MdArticle/></span> Article</button>

            </div>
        </div>       
        </>
    )

}


export default SearchBar