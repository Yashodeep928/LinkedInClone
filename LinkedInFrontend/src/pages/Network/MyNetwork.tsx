import Footer2 from '../../components/Footer/Footer2'
import ManageNetwork from './ManageNetwork/ManageNetwork'
import InviteCard from './MiddleNetworkBox/Grow/invitations/InviteCard'
import NetworkBox from './MiddleNetworkBox/NetworkBox'
import PuzzleCard from './MiddleNetworkBox/Grow/puzzle/puzzlecard'
import Premium from './MiddleNetworkBox/Grow/premium/premium'
// import NetworkCard from './NetworkCard/NetworkCard'

function MyNetwork() {
  return (
    <>
    <div className="profileSection">
       
       <ManageNetwork/>
       <Footer2/>

    </div>

    <div className="middleSection">
      <NetworkBox/>
      <InviteCard/>
      <PuzzleCard/>
      <Premium/>
    </div>    
    </>
  )
}

export default MyNetwork