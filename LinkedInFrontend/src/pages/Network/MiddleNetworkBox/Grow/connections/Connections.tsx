import Suggestion from "../suggestions/suggestion"
import MgM from "./mgm/mgm"
import Recent from "./recentpeople/recent"

function Connections() {
  return (
    <>
    <MgM/>
    <Recent/>
    <Suggestion/>
    </>
  )
}

export default Connections