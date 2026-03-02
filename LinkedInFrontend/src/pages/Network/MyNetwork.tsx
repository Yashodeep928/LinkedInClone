import Footer from '../../components/Footer/Footer'
import ManageNetwork from './ManageNetwork/ManageNetwork'
import NetworkBox from './MiddleNetworkBox/NetworkBox'
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
      <NetworkBox/>
    </div>

    
    </>
  )
}

export default MyNetwork