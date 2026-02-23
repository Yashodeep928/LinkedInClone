import './ContentCard.css'
import { Ellipsis ,X } from 'lucide-react';
import { FaThumbsUp,FaComment,FaRetweet,FaPaperPlane } from 'react-icons/fa';
import {useState } from 'react';

function ContentCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
          const openModal =()=> {
            setIsModalOpen(prev => !prev);
          }
  return (
       <>

       <div className="contentcard">

        <div className="content-card-header">
            <span>Suggested</span>

            <div className="content-card-buttons">
            <button onClick={openModal} className='content-card-btn'><Ellipsis/></button>
            <button className='content-card-btn'><X/></button>

        </div>


           {isModalOpen &&(
            <div className="modalBox">
              .
              <button className='modalBoxbtn'>Save</button>
              <button className='modalBoxbtn'>Copy link to post</button>
              <button className='modalBoxbtn'>Embed this post</button>
              <button className='modalBoxbtn'>Not Interested</button>
              <button className='modalBoxbtn'>Repost post</button>
            </div>
           )}
            
       
        </div>

        <div className="content-card-middle">
          <div className="content-card-middle-header">

             <div className="imagesection">
              <img src="/src/assets/Yashodeep.JPG" alt="" />
             </div>

              <div className="content-card-middle-header-text">
                <h4>Yashodeep Deshpande</h4>
                <p>Software Engineer at TechCorp</p>
                <p>10h ago</p>
                </div>

                <div className="followbtn">
                <button className='follow-btn'>Follow</button>
                </div>


          </div>

        </div>




        <div className="content-card-bottom">

          <div className="content-card-bottom-uppersection">
            <span>1,234</span>
          </div>

          <div className="content-card-bottom-buttons">
          <button className='content-card-bottom-btn'><FaThumbsUp/> Like</button>
          <button className='content-card-bottom-btn'><FaComment/> Comment</button>
          <button className='content-card-bottom-btn'><FaRetweet/> Repost</button>
          <button className='content-card-bottom-btn'><FaPaperPlane/> Send</button>

          </div>
          
        </div>

        

       </div>
       
       
       </>
  )
}

export default ContentCard