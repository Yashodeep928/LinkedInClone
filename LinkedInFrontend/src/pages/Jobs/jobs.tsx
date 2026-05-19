import Footer2 from '../../components/Footer/Footer2'
import ProfileCard from '../home/profileCard/profileCard'
import JobPicks, { MoreJobs } from './Jobpicks/JobPicks'
import './jobs.css'
function Jobs() {
  return (
    <>
      <div className="jobs-sidebar">
       <ProfileCard/>
        <Footer2/>

    </div>

    <div className="jobs-main">
      <JobPicks/>
      <MoreJobs/>
  
    </div>    
    
    </>
  )
}

export default Jobs