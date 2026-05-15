import Footer2 from '../../components/Footer/Footer2'
import ManageNetwork from './ManageNetwork/ManageNetwork'
import InviteCard from './MiddleNetworkBox/Grow/invitations/InviteCard'
import NetworkBox from './MiddleNetworkBox/NetworkBox'
import PuzzleCard from './MiddleNetworkBox/Grow/puzzle/puzzlecard'
import Premium from './MiddleNetworkBox/Grow/premium/premium'
import Connections from './MiddleNetworkBox/Grow/connections/Connections'
import './MyNetwork.css'
// import NetworkCard from './NetworkCard/NetworkCard'

function MyNetwork() {
  return (
    <>
    <div className="network-sidebar">
       
       <ManageNetwork/>
       <Footer2/>

    </div>

    <div className="network-main">
      <NetworkBox/>
      <InviteCard/>
      <PuzzleCard/>
      <Premium/>
      <Connections/>
    </div>    
    </>
  )
}

export default MyNetwork
