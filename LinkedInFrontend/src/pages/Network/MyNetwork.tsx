import Footer from '../../components/Footer/Footer'
import ManageNetwork from './ManageNetwork/ManageNetwork'
import NetworkCard from './NetworkCard/NetworkCard'

function MyNetwork() {
  return (
    <>
    <div className="profileSection">
       
       <ManageNetwork/>
       <NetworkCard/>
       <Footer/>

    </div>

    <div className="middleSection">

    </div>

    <div className="rightSection">

      
    </div>
    </>
  )
}

export default MyNetwork