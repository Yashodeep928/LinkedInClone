import Footer2 from '../../components/Footer/Footer2'
import ManageNetwork from './ManageNetwork/ManageNetwork'
import NetworkBox from './MiddleNetworkBox/NetworkBox'
import NetworkCard from './NetworkCard/NetworkCard'

function MyNetwork() {
  return (
    <>
    <div className="profileSection">
       
       <ManageNetwork/>
       <Footer2/>

    </div>

    <div className="middleSection">
      <NetworkBox/>
    </div>    
    </>
  )
}

export default MyNetwork