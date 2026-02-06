
import './searchBar.css'
import { FaVideo,FaImage } from 'react-icons/fa'; 
import { MdArticle } from "react-icons/md";

function SearchBar ()


{

    return(
        <>

        <div className="container">

            <div className="uppersection">

                <img src="/src/assets/Yashodeep.JPG" alt="" />

                <button >Start a Post</button>
            </div>

            <div className="lowersection">
             
             <button className='btn'>
                <span className='icon'><FaVideo /></span>
                Video
                </button>
             <button className='btn'>
                <span className='icon'><FaImage/></span>
                 Photo
                 </button>
             <button className='btn'><span className='icon'><MdArticle/></span> Article</button>

            </div>
        </div>

        
        </>
    )

}


export default SearchBar