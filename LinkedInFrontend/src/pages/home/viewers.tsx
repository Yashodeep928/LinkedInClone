import './viewers.css'
import { FaBookmark, FaRegBookmark,FaUsers,FaRegNewspaper, FaCalendarAlt  } from 'react-icons/fa';
type StatItemProps = {
  label: string
  value: number
}

function StatItem({ label, value }: StatItemProps) {
  return (
    <li className='item'>
      {label}
      <button className='viewersbtn'>{value}</button>
    </li>
  )
}

function TryOneMonth() {
  return (
    <ul className="trialBox">
      <li className='tb'>
        Apply to jobs personalized for you with Premium
      </li>
      <li className='tb'>
        <button className='trialBoxBtn'>
          Try 1 month for ₹0
        </button>
      </li>
    </ul>
  )
}

function ListBox (){
    return (
        <ul className='listBoxes'>
            <li className='lib'><FaBookmark/>Saved items</li>
            <li className='lib'><FaUsers/>Groups</li>
            <li className='lib'><FaRegNewspaper/>Newsletters</li>
            <li className='lib'><FaCalendarAlt/>Events</li>
        </ul>
    )
}


export default function Viewers() {
  return (
    <>
      <ul className='list'>
        <StatItem label="Profile viewers" value={66} />
        <StatItem label="Post impressions" value={448} />
      </ul>

      <TryOneMonth />
      <ListBox />
    </>
  )
}